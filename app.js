require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/users");
var eventsRouter = require("./routes/events");
var placesRouter = require("./routes/places");
var uploadRouter = require("./routes/upload");

var app = express();

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const cors = require("cors"); 
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/places", placesRouter);
app.use("/upload", uploadRouter);

module.exports = app;
