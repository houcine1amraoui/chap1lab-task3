async function getAllUsers() {
  const res = await fetch("http://localhost:3000/users");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const users = await res.json();
  return users;
}

async function getOneUser() {
  const id = "1";
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const user = await res.json();
  return user;
}

async function createUser() {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: {
      email: "test@gmail.com",
      password: "test123",
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const user = await res.json();
  return user;
}
