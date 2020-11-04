const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const userRouter = require("./routers/user")
const itemRouter = require("./routers/items")
const authMiddleware = require("./auth/middleware")

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
app.use("/items", authMiddleware, itemRouter)
app.use("/user", userRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});