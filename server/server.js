const express = require("express");
const path = require("path");
const users = require("./users");
const app = express();
// app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
