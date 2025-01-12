const { Router } = require("express");

const beansRouter = Router();

beansRouter.get("/", (req, res) => res.send("All Beans"));
beansRouter.get("/:beansId", (req, res) => {
  const { beansId } = req.params;
  res.send(`Beans ID: ${beansId}`);
});

module.exports = beansRouter;