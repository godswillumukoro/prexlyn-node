const express = require("express");
const router = express.Router();
// const Post = require('../models/Post')

/* ***
 * GET /
 * HOME
 */
router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Prexlyn Properties | Home"
  });
});

module.exports = router;
