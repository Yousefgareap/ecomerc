window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
// const tooltipTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="tooltip"]'
// );
// const tooltipList = [...tooltipTriggerList].map(
//   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
// );
document
  .querySelectorAll("[data-bs-toggle='tooltip']")
  .forEach((item) => new bootstrap.Tooltip(item));

document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    window.alert("Added to cart");
  });
});

document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوظة لسنة " + new Date().getFullYear();
