const axios = require("axios");

const fetUsers = async () => {
  const response = await axios.get("http://localhost:3000/api/users");
  console.log(response.data);
  console.log(response.headers["x-powered-by"]);
};

fetUsers();
