const express = require("express");
const app = express();
const beansRouter = require("./routes/beansRouter");

require("dotenv").config();
app.set('view engine', 'pug');

function middleWhere (req, res, next) {
  console.log("Middleware called");

  req.customProperty = "test";

  req.customFunc = (val) => {
    return val + 3000
  }

  next();
}

app.use(middleWhere);

app.use("/beans", beansRouter);

app.get("/", (req, res) => {
  
  return res.render("index", { pump: 'GOTY', it: req.customFunc(300)});
});



app.get("/messages?", (req, res) => {
  return res.json({ data: {message: "be cautious"} });
})

app.all("/profile/:profileId/:messageId", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first express app - listening on port ${PORT}!`);
});
