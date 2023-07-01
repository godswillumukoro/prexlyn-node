require("dotenv").config();

const express = require("express");
var favicon = require("serve-favicon");
var path = require("path");
const expressLayout = require("express-ejs-layouts");
const { connection } = require("mongoose");
// const connectDatabase = require('./server/config/database')

const app = express();

// mongoose connection
// connectDatabase()

// favicon
app.use(
  favicon(path.join(__dirname, "public", "images/favicon_io/favicon-32x32.png"))
);

// static files and folders
app.use(express.static("public"));

// template engine
app.use(expressLayout);
app.set("layout", "./layouts/indexLayout");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/indexRoute"));

app.listen(process.env.PORT, () => {
  console.log("Running on port: " + process.env.PORT);
});
