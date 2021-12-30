const modifiersList = require("./modifiers").modifiersList;
const offerModifier = require("./modifiers").offerModifier;
const Offer = require("../models/offer").model;

const helper = require("./helper");


class Modifiers {
    constructor(value, shortExplanation, longExplanation) {
        this.value = value;
        this.shortExplanation = shortExplanation;
        this.longExplanation = longExplanation;
    }
}

class PriceEstimation{
    constructor(basePrice, modifiersList, finalPrice, unitID){
        this.basePrice = basePrice;
        this.modifiersList = modifiersList;
        this.finalPrice = finalPrice;
        this.unitID = unitID;
    }
}

async function computePriceEstimation(units, info) {
    let estimations = [];

    const offers = await Offer.find();
    const inPeriodOffers = offers.filter(o => {
        return (o.start <= info.from && info.from <= o.end) || 
               (o.start <= info.to && info.to <= o.end)
    })
    const finalOffers = inPeriodOffers.filter(o => {
        return o.categoryFilter.length === 0 || o.categoryFilter.includes(info.category)
    })

    console.log(finalOffers)
    info.offers = finalOffers

    for (const unit of units) {
        estimations.push(await unitPriceEstimation(unit, info));
    }

    return estimations.sort( (a, b) => parseFloat(a.finalPrice) - parseFloat(b.finalPrice) );
}

async function unitPriceEstimation(unit, info) {
    let computedModifiers = await computeModifiers({ unit, ...info });
    let finalPricePerDay = unit.price;

    for (const modifier of computedModifiers)
        finalPricePerDay = finalPricePerDay * modifier.value;

    const numberOfDay = helper.dayDifference(info.from, info.to);
    const finalPrice = finalPricePerDay * numberOfDay;
    

    return new PriceEstimation(unit.price, computedModifiers, finalPrice, unit._id);
}

async function computeModifiers(info) {
    let modifiers = [];
    for (const modifier of modifiersList) {
        try{
            if (await modifier.condition(info)){
                modifiers.push(new Modifiers(await modifier.value(info), await modifier.shortExplanation(info), await modifier.longExplanation(info)));
            } 
        } catch (error) {
            console.error(error);
        }
    }

    for(const offer of info.offers){
            

        modifiers.push(new Modifiers(offer.modifier, offer.shortDescription, offer.description))
    }

    return modifiers;
}

module.exports.computePriceEstimation = computePriceEstimation;
module.exports.unitPriceEstimation = unitPriceEstimation