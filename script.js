function highlight() {
  const elements = document.querySelectorAll("strong");

  elements.forEach(function (element) {
    element.style.color = "green";
  });
}

function return_normal() {
  const elements = document.querySelectorAll("strong");

  elements.forEach(function (element) {
    element.style.color = "black";
  });
}