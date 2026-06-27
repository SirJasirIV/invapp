const { Router } = require("express");
const catRouter = Router();
const catController = require("../controllers/catcontroller");
catRouter.get("/:slug", catController.categoryDetailGet);

catRouter.get("/", catController.getCategoryList);

module.exports = catRouter;