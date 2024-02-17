const axios = require("axios");

const getAllUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  console.log(response.data);
  console.log(response.headers["x-powered-by"]);
};

const getOneUser = async () => {
  const options = {
    method: "POST",
    url: "http://localhost:3000/users",
    headers: {
      "content-type": "application/json",
    },
    data: { id: "1" },
  };
  const response = await axios.request(options);
  console.log(response.data);
};

// getAllUsers();
// getOneUser();
