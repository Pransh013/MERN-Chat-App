import express from "express";
import "dotenv/config";
import chats from "./data/data.mjs";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const userData = chats.filter((data) => data._id === id);
  res.send(userData);
});

app.listen(PORT, () => {
  console.log(`App started at port ${PORT}`);
});
