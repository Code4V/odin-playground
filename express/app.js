const express = require("express");
const app = express();
const beansRouter = require("./routes/beansRouter");

require("dotenv").config();

app.use("/beans", beansRouter);

app.get("/", (req, res) => res.send("Hellow World"));


app.post("/mess*ages", (req, res) => {
  return res.send("This is where you can see any messages.");
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
