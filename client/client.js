const getAllUsers = async () => {
  const res = await fetch("http://localhost:3000/users");
  // const response = await axios.get("http://localhost:3000/users");
  const users = await res.json();
  console.log(users);
  // console.log(response.headers["x-powered-by"]);
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

getAllUsers();
// getOneUser();
