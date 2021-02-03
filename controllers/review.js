const Movie = require('../models/movie');

exports.TypeReview = async (req, res) => {
    const{ index, reviewer, review } = req.body;
    let result = {
        success: null,
        error: null
    };

    try {
        await Movie.findOneAndUpdate(
            {_id: index },
            { $push: {reviews: {reviewer: reviewer, review: review}} }
        ).sort({_id: -1 });
        result = {
            success: true,
            error: null
        };
    } catch (err) {
        result = {
            success: false,
            error: err
        };
    }
    res.json(result);
};

exports.ReviewList = async (req, res) => {
    const index = req.params.id;
    let result = {
        success: null,
        error: null
    };

    try {
        const reviews = await Movie.find({ _id: index }, { _id: 0, reviews: 1});
        result = {
            success: true,
            error: null,
            result: reviews
        };
    } catch (err) {
        result = {
            success: false,
            error: err
        };
    }
    res.json(result);
};