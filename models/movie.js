const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const movieSchema = new Schema({
    movie_id: { type: String, required: true, unique: true},
    tittle: { type: String, required: true },
    description: { type: String},
    category: {type: String},
    rating: { type: Number, min: 0, max: 10 },
    movieInfo: [{
        director: {type: String},
        budget: { type: Number},
        language: {type: String},
        countries: {type: String},
        released_date: {type: String}
    }],
    actors: [{
        name: {type: String},
        image_actor: {type: String, data: Buffer}
    }],
    video_url: {type: String},
    reviews: [{
        type: ObjectId, 
        ref: 'Review'
    }],
    image_movie: {type: String, data: Buffer},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now }
});

const model = mongoose.model('Movie', movieSchema);