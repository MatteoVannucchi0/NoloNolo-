const conditionLevel = require("../models/unit").conditionLevel;
const helper = require("./helper");

//TODO magari rendere condition async

let discoutBasedOnCondition = {
    async condition({ unit, from, to, ...others }) {
        if (unit.condition == conditionLevel.perfect) {
            return false;
        }
        else if (unit.condition == conditionLevel.minorflaw) {
            this.value = 0.8;
        }
        else if (unit.condition == conditionLevel.majorflaw) {
            this.value = 0.5;
        }
        else if (unit.condition == conditionLevel.broken) {
            throw new Error("Tried to calculate the price of a broken unit"); //Nel caso sia broken non dovrebbe proprio essere chiamato questo
        }
        else {
            throw new Error("Condtion status of unit is not valid: ", unit.condition);
        }

        return true;
    },
    value: 1,
    shortExplanation({ unit, from, to, ...others }) {
        return "discout based on condition of the unit";
    },
    longExplanation({ unit, from, to, ...others }) {
        return ` A discout of ${(1 - this.value) * 100}% is applied because the unit has some ${unit.condition}`;
    }
};

let premiumBasedOnWeekendDays = {
    //This modifier modify the price based on how much day are on the weekend
    async condition({ unit, from, to, ...others }) {
        const numberOfDays = helper.dayDifference(from, to);
        return true;

        //Contare il numero di giorni fra from e to
        //Contare il numero di giorni fra from e to che sono weekend
        //Fare il rapporto fra i due e moltiplicare per una variabile in base a ciò
    },
    value: 1,
    shortExplanation({ unit, from, to, ...others }) {
        return "Secondo modifiers";
    },
    longExplanation({ unit, from, to, ...others }) {
        return "A discout of " + this.value * 100 + "% is applied because the unit has some " + unit.condition;
    }
};

const modifiersList = [
    discoutBasedOnCondition,
    premiumBasedOnWeekendDays
]

module.exports.modifiersList = modifiersList;