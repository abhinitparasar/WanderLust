const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const e = require("connect-flash");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { renderSignUpForm , signUp, renderLoginForm ,login , logout} = require("../controllers/user.js");

router.get("/signup", renderSignUpForm);

router.post("/signup", wrapAsync(signUp));

router.get("/login", wrapAsync(renderLoginForm));


router.post("/login",saveRedirectUrl, passport.authenticate("local", {failureRedirect:"/login",failureFlash: true,}), wrapAsync(login))

router.get("/logout", logout);


module.exports= router;