const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    }
}, { _id: false });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    tags: {
        type: [tagSchema],
        required: true,
    },
    altproducts: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
    }
})

productSchema.methods.getUnits = async function () {
    throw new Error('Not implemented');
}

productSchema.methods.isAvailable = async function (from, to) {
    throw new Error('Not implemented');
}

module.exports.model = mongoose.model('Product', productSchema);
module.exports.schema = productSchema;
