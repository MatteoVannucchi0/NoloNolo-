const mongoose = require('mongoose');
const Rental = require('../models/rental');


const conditionLevel = {
    perfect: "perfect",
    minorflaw: "minor flaw",
    majorflaw: "major flaw",
    broken: "broken",
}

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        enum: [conditionLevel.perfect, conditionLevel.minorflaw, conditionLevel.majorflaw, conditionLevel.broken],
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
    },
    rentals: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        default: [],
        ref: "Rental",
    },
})

unitSchema.methods.getRentals = async function () {
    return await Rental.find({ unit: this._id });
}

unitSchema.methods.getOpenRentals = async function () {
    return await Rental.find({ unit: this._id, open: true });
}

unitSchema.methods.available = async function () {
    const dateNow = new Date().now();
    let rentalInPeriod = await this.getOpenRentals().filter(
        x => { return (x.startDate <= dateNow && x.expectedEndDate >= dateNow) }
    )

    return rentalInPeriod.length == 0;
};

unitSchema.methods.availableFromTo = async function (from, to) {
    if(from > to)
        throw new Error("Tryied to verify availability from " + from + " to " + to + "but from is after to");

    let rentalInPeriod = await this.getOpenRentals()
        .filter(x => {
            return (x.startDate <= from && x.expectedEndDate >= from)
                || (x.startDate <= to && x.expectedEndDate >= to)
                || (x.startDate >= from && x.expectedEndDate <= to)
        })

    return rentalInPeriod.length == 0;
}

module.exports.model = mongoose.model('Unit', unitSchema);
module.exports.schema = unitSchema;
module.exports.conditionLevel = conditionLevel;
