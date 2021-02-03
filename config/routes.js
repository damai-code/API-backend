const express = require('express')
const router = express.Router()
const { TypeReview, ReviewList } = require('../controllers/review')

router.post('/movie/type_review', TypeReview);
router.get('/movie/review_list/:id', ReviewList);
 
module.exports = router;