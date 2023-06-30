const express = require("express");
const router = express.Router();
// const Post = require('../models/Post')

/* ***
 * GET /
 * HOME
 */
router.get("/", (req, res) => {
  const locals = {
    title: "Prexlyn Properties | Home",
  };
  res.render("pages/index", {
    locals,
  });
});

/* ***
 * GET /
 * ABOUT
 */
router.get("/about", (req, res) => {
  const locals = {
    title: "Prexlyn Properties | About",
  };
  res.render("pages/about", {
    locals,
  });
});

module.exports = router;
