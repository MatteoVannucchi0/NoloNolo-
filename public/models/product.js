const mongoose = require('mongoose');
const Unit = require('./unit').model;

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
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: "placeholder.jpg",
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    tags: [tagSchema],
    altproducts: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Product',
    }
})

//TODO da aggiungere nella specifica di openapi
productSchema.methods.available = async function () {
    let unitsAvaible = await this.getUnits().filter(x => x.available);

    return unitsAvaible.length > 0;
};

productSchema.methods.getUnits = async function () {
    return await Unit.find({product: this._id});
}

productSchema.methods.availableFromTo = async function (from, to) {
    let unitsAvaible = await this.getUnits().filter(x => x.availableFromTo(from, to));

    return unitsAvaible.length > 0;
}

module.exports.model = mongoose.model('Product', productSchema);
module.exports.schema = productSchema;
