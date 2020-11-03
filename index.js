const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const itemRouter = require("./routers/items")

//bodyparser
app.use(express.json());

//cors middleware
app.use(corsMiddleWare());

app.use("/items", itemRouter)

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