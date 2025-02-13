const getAllUsers = async () => {
  const res = await fetch("http://localhost:3000/users");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const users = await res.json();
  console.log(users);
};

const getOneUser = async () => {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: { id: "1" },
  });
  const user = await res.json();
  console.log(user);
};

getAllUsers();
