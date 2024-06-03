const express = require("express");
const planetsRouter = require("./planets/planets.router");
const launchesRouter = require("./launches/launches.router");

const v1_router = express.Router();

v1_router.use("/planets", planetsRouter);
v1_router.use("/launches", launchesRouter);

module.exports = v1_router;
