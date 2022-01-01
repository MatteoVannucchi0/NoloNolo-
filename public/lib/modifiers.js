/* eslint-disable no-unused-vars */
const conditionLevel = require("../models/unit").conditionLevel;
const Helper = require("./helper");

let discoutBasedOnCondition = {
    id: 0,
    majorflawDiscount: 0.5,
    minorflawDiscount: 0.8,
    async condition({ unit, ...others }) {
        if(unit.condition === conditionLevel.broken) {
            throw new Error("Tryied to calculate modifers for a broken unit");
        }

        return unit.condition === conditionLevel.majorflaw || unit.condition === conditionLevel.minorflaw;
    },
    async value({ unit, ...others}) {
        if(unit.condition === conditionLevel.majorflaw) return this.majorflawDiscount
        if(unit.condition === conditionLevel.minorflaw) return this.minorflawDiscount
        return 1;
    },
    async shortExplanation({...others }) {
        return "Sconto dovuto allo stato dell'unità";
    },
    async longExplanation(contex) {
        return `Uno sconto del ${Helper.toPercent(1 - await this.value(contex))}% è applicato perché l'unità ha ${Helper.translateUnitConditionToItalian(contex.unit.condition)}`;
    }
};

let premiumBasedOnWeekendDays = {
    id: 1,
    //This modifier modify the price based on how much day are on the weekend
    //Weekend day cost 20% more
    premiumPrice: 1.2,
    weekendDays: null,
    async condition({ day, ...others }) {
        return Helper.isWeekend(day)
    },
    async value(contex) {
        return this.premiumPrice;
    },
    async shortExplanation({ unit, ...others }) {
        return "Prezzo aumentanto nei weekend";
    },
    async longExplanation({ unit, ...others }) {
        return `I giorni nel weekend, visto la grossa richiesta, hanno un sovvrapprezzo del ${Helper.toPercent(this.premiumPrice - 1)}%`;
    }
};

const modifiersList = [
    discoutBasedOnCondition,
    premiumBasedOnWeekendDays
]

module.exports.modifiersList = modifiersList;
    