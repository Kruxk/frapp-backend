const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const promptsRouter = require("./routers/prompts");
const storyRouter = require("./routers/stories");
const userRouter = require("./routers/users");
const { PORT } = require("./config/constants");

//bodyparser
app.use(express.json());

//cors middleware
app.use(corsMiddleWare());

app.use("/prompts", promptsRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);

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