async function getAllUsers() {
  const res = await fetch("http://localhost:3000/users");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const users = await res.json();
  return users;
}

async function getOneUser() {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: { id: "1" },
  });
  const user = await res.json();
  return user;
}
