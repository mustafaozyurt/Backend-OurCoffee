const coffeesRouter = require("express").Router();
const {
  getCoffees,
  getCoffeeById,
} = require("../controllers/coffeesController");

// desc: get all coffees and filter them
// GET /coffees/
// public
coffeesRouter.get("/", getCoffees);

// desc: get a coffee by ıd
// GET /coffees/:id
// public
coffeesRouter.get("/:id", getCoffeeById);

module.exports = coffeesRouter;
