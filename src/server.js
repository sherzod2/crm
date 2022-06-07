require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const router = require("./routes/routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/", router);
app.use("/*", (_, res) => res.send("DON'T OK"));

app.listen(7777, console.log(7777));
