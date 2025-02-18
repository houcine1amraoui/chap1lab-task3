import express from "express";

import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

export const users = [
  {
    id: "1",
    email: "mohamed@univ-msila.dz",
    password: "mohamed2024",
  },
  {
    id: "2",
    email: "amina@univ-msila.dz",
    password: "amina2024",
  },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const givenId = req.params.id;
  const result = users.filter((user) => {
    return user.id === givenId;
  });
  res.json(result);
});

app.post("/users", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newUser = {
    id: "3",
    email: email,
    password: password,
  };
  users.push(newUser);
  res.json(newUser);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
