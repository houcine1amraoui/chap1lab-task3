import express, { json } from "express";
import { users } from "./users.js";
const app = express();

app.use(json());

app.get("/users", (req, res) => {
  console.log(req.headers["user-agent"]);
  res.status(404).json(users);
});

app.post("/users", (req, res) => {
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
