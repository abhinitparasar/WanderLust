const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const { isLoggedIn, validatelisting, isOwner } = require("../middleware.js");
const { index ,renderNewForm, showListing, createListing, renderEditForm, updateListing, destroyListing} = require("../controllers/listings.js");

//
router
.route("/")
.get(wrapAsync(index))
.post(isLoggedIn ,validatelisting, wrapAsync(createListing));

//New route
router.get("/new", isLoggedIn , renderNewForm)

//
router
.route("/:id")
.put(isLoggedIn ,isOwner, validatelisting, wrapAsync(updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(destroyListing))
.get(wrapAsync(showListing));


// edit Route
router.get("/:id/edit" ,isLoggedIn, isOwner, wrapAsync(renderEditForm));


module.exports = router;  