const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

//bodyparser
app.use(express.json());

//cors middleware
app.use(corsMiddleWare());

// testing endpoints
app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});