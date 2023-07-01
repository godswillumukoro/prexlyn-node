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

/* ***
 * GET /
 * LANDS
 */
router.get("/lands", (req, res) => {
  const locals = {
    title: "Prexlyn Properties | Lands",
  };
  res.render("pages/lands", {
    locals,
  });
});

/* ***
 * GET /
 * HOUSES
 */
router.get("/houses", (req, res) => {
  const locals = {
    title: "Prexlyn Properties | Houses",
  };
  res.render("pages/houses", {
    locals,
  });
});

/* ***
 * GET /
 * CONTACT
 */
router.get("/contact", (req, res) => {
  const locals = {
    title: "Prexlyn Properties | Contact us",
  };
  res.render("pages/contact", {
    locals,
  });
});

module.exports = router;
