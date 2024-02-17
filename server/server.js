const express = require("express");
const path = require("path");
const users = require("./users");
const app = express();

app.get("/api/users", (req, res) => {
  console.log(req.headers["user-agent"]);
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
