const express = require("express");
const routes = express.Router();
const SessionController = require("../src/app/controllers/SessionController");
const DashboardController = require("../src/app/controllers/DashboardController");
const authMiddleware = require("../src/app/middlewares/auth");

routes.get("/", DashboardController.index);

routes.get("/stringCalculator/:str", DashboardController.stringCalculator);

routes.post("/stringCalculator/:str", DashboardController.stringCalculator);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/dashboard", authMiddleware, DashboardController.index);

module.exports = routes;
