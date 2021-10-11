const mongoose = require('mongoose');
const productSchema = require('../models/product').schema;

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
    },
    rentals: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
    },
})

unitSchema.virtual("available").get(function (from, to) {
    throw new Error('Not implemented');
});

module.exports.model = mongoose.model('Unit', unitSchema);
module.exports.schema = unitSchema;
