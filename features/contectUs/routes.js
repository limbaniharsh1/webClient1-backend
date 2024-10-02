const express = require("express");
const router = express.Router();
const { createContact } = require("./controller");
const { validateContactForm } = require("./validate");

router.post("/", validateContactForm, createContact);

module.exports = router;
