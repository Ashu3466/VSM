const express = require('express');
const router = express.Router();
const {home, register, login} = require('../controllers/auth-controlers.js');
const {singupSchema, singinSchema} = require("../validator/auth-validator.js")
const validate = require("../middleware/validater-middleware.js");


router.route("/").get(home);
router.route("/register").post(validate(singupSchema),register);
router.route("/login").post(validate(singinSchema), login);

module.exports = router;