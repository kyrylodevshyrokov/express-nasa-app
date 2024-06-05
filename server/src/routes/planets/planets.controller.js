const { getAllPlanets } = require("../../models/planets.model");
const status = require("http-status");

async function httpGetAllPlanets(req, res) {
  return res.status(status.OK).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
