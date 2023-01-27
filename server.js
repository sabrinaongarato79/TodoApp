const express = require("express");
const router = require("./router.js");

const server = express();

server.use(express.json());

server.use("/todos", router);

module.exports = server;
