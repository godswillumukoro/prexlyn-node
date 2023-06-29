const express = require("express");
const router = express.Router();
// const Post = require('../models/Post')

/* ***
 * GET /
 * HOME
 */
router.get("/", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
