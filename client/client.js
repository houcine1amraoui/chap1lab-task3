const getAllUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/users");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const users = await res.json();
    console.log(users);
    console.log(res.headers.get("x-powered-by"));
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    if (error instanceof TypeError) {
      console.error("Network error or fetch failed");
    }
  }
};

const getOneUser = async () => {
  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: "1" }),
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
    if (error instanceof TypeError) {
      console.error("Network error or fetch failed");
    }
  }
};