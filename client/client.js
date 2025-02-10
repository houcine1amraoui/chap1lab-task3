const getAllUsers = async () => {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();
  console.log(users);
  console.log(res.headers.get("x-powered-by"));
};

const getOneUser = async () => {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: "1" }),
  });
  const user = await res.json();
  console.log(user);
};
