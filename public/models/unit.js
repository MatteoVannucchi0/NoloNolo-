const mongoose = require('mongoose');

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
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
    },
    rentals: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "Rental",
    },
})

unitSchema.virtual("available").get(function (from, to) {
    throw new Error('Not implemented');
});

unitSchema.methods.availableFromTo = async function (from, to) {
    throw new Error('Not implemented');
}

module.exports.model = mongoose.model('Unit', unitSchema);
module.exports.schema = unitSchema;
