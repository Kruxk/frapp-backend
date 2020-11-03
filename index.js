const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth")

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

app.use("/", authRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});