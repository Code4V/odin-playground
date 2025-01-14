const { Router } = require("express");

const { getCoffeeBean } = require('../controllers/beanController')

const beansRouter = Router();

beansRouter.get("/", (req, res) => res.send("All Beans"));

beansRouter.get("/:beanId", getCoffeeBean);

module.exports = beansRouter;