/* eslint-disable no-unused-vars */
const conditionLevel = require("../models/unit").conditionLevel;
const helper = require("./helper");

//TODO magari rendere condition async

let discoutBasedOnCondition = {
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
        return "discout based on condition of the unit";
    },
    async longExplanation({unit, ...others }) {
        return ` A discout of ${(1 - this.value) * 100}% is applied because the unit has some ${unit.condition}`;
    }
};

let premiumBasedOnWeekendDays = {
    //This modifier modify the price based on how much day are on the weekend
    //Weekend day cost 20% more
    premiumPrice: 1.2,
    weekendDays: null,
    async condition({ unit, from, to, ...others }) {
        this.weekendDays = helper.getNumberOfWeekendDays(from, to);
        console.log(from);
        return this.weekendDays > 0;
    },
    async value({from, to}) {
        const allDays = helper.dayDifference(from, to);
        const workingDays = allDays - this.weekendDays;
        return (workingDays * 1 + this.weekendDays * this.premiumPrice) / allDays;
    },
    async shortExplanation({ unit, from, to, ...others }) {
        return "Prezzo aumentanto nei weekend";
    },
    async longExplanation({ unit, from, to, ...others }) {
        return `Ci sono ${this.weekendDays} giorni nel weekend che costano ${(this.premiumPrice - 1) * 100}% in più`;
    }
};

const modifiersList = [
    discoutBasedOnCondition,
    premiumBasedOnWeekendDays
]

module.exports.modifiersList = modifiersList;
    