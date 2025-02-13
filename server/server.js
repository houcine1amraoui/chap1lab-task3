import express, { json } from "express";
import { users } from "./users.js";
const app = express();

app.use(json());

const simulateDelay = (req, res, next) => {
  const delay = Math.floor(Math.random() * 1000) + 500;
  setTimeout(next, delay);
};

app.get("/users", simulateDelay, (req, res) => {
  console.log(req.headers["user-agent"]);
  res.status(200).json(users);
});

app.post("/users", simulateDelay, (req, res) => {
  const givenId = req.body.id;
  const result = users.filter((user) => {
    return user.id === givenId;
  });
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
