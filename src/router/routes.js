const express = require("express");
const app = express();
const setuser = require("./setuser.route");
const user = require("./user.route");

app.use("/user", setuser);
app.use("/api", user);


module.exports = app;