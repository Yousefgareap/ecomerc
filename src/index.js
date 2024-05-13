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

document
  .querySelectorAll(".size-option input[type='radio'] ")
  .forEach((item) => {
    item.addEventListener("change", (e) => {
      document.querySelectorAll(".size-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });

document
  .querySelectorAll(".color-option input[type='radio'] ")
  .forEach((item) => {
    item.addEventListener("change", (e) => {
      document.querySelectorAll(".color-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });

document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوظة لسنة " + new Date().getFullYear();
