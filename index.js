const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth")
const itemRouter = require("./routers/items")

//bodyparser
app.use(express.json());

//cors middleware, logger middleware
app.use(corsMiddleWare());

//testing endpoints
app.get("/", (req, res) => {
  res.send("Hi from express");
});
app.post("/echo", (req, res) => {
  res.json(req.body);
});

//routes
app.use("/items", itemRouter)
app.use("/", authRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});