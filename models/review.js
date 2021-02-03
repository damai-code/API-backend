const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const reviewSchema = new Schema({
    review: { type: String, required: true },
    rating: {type: Number, min: 0, max: 10},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const model = mongoose.model('Review', reviewSchema);

export default model;