const express = require("express");
const router = express.Router({ mergeParams : true});
const mongoose = require("mongoose");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const { createReview, destroyReview } = require("../controllers/review.js");
const { validatereview } = require ("../middleware.js")


//Review
//Post route
router.post("/", isLoggedIn, validatereview , wrapAsync(createReview));

//Delete Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(destroyReview));

module.exports= router;