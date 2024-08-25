const express = require("express");
const router = express.Router();
const frontendController = require("../Controller/frontendController");

router.get("/", frontendController.renderIndex);

// Handle form submission
router.post("/submit", frontendController.handleFormSubmission);

module.exports = router;
