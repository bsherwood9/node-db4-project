const express = require("express");

const RecipeRouter = require("../routes/router.js");

const server = express();

server.use(express.json());
server.use("/api", RecipeRouter);

module.exports = server;
