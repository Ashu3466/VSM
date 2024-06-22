const express = require('express');
const router = express.Router();
const contactForm = require("../controllers/contact-controlars");

router.route("contact").post(contactForm);

module.exports = router;