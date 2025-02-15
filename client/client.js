async function getAllUsers() {
  const res = await fetch("http://localhost:3000/users");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
<<<<<<< HEAD
  const users = res.json();
=======
  const users = await res.json();
>>>>>>> fbfbf8e15e6a55fd00bbce198f3bb3814b0ebc14
  return users;
}

async function getOneUser() {
<<<<<<< HEAD
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
=======
>>>>>>> fbfbf8e15e6a55fd00bbce198f3bb3814b0ebc14
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
