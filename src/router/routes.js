const express = require("express");
const app = express();
const setuser = require("./setuser.route");
const user = require("./user.route");
const estoque = require("./estoque.route")

app.use("/user", setuser);
app.use("/api", user);
app.use("/estoque", estoque);

module.exports = app;