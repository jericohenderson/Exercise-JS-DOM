let colors = ["black", "orange", "red", "brown", "violet"];
let button = document.getElementById("button");

button.addEventListener("click", function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
