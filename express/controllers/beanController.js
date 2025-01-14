const db = require("../db");
const asyncHandler = require("express-async-handler");

const getCoffeeBean = asyncHandler(async (req, res) => {
  const { beanId } = req.params;

    const bean = await db.getCoffeeBean(Number(beanId));
  
    if (!bean) {
      res.status(404).send("Bean not found");
      return;
    }
  
    res.send(`Bean Name: ${bean.bean}`);
})

module.exports = { getCoffeeBean };

