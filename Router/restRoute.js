const express = require("express");
const router = express.Router();
const apiController = require("../Controller/dataSeperateController");

// Define GET and POST routes
router.get("/api/v1/bfhl", apiController.getOperation);
router.post("/api/v1/bfhl", apiController.postOperation);

module.exports = router;
