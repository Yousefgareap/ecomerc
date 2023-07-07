window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";

document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach((item) => new bootstrap.Tooltip(item));

document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("أضيف المنتج الي عربة الشراء");
  });
});

document
  .querySelectorAll('.size-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".size-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });
document
  .querySelectorAll('.color-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".color-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });

// حساب السعر الاجمالي للمنتج

document.querySelectorAll("[data-product-quantity]").forEach((item) => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUbit = parent.getAttribute("data-product-price");
    const totalpriceForProduct = newQuantity * pricePerUbit;
    parent.querySelector(".total-price-for-product").innerHTML =
      totalpriceForProduct + "$";

    calculateTotalprice();
  });
});

document.querySelectorAll("[data-remove-from-card]").forEach((item) => {
  item.addEventListener("click", () => {
    item.closest("[data-product-info]").remove();
    calculateTotalprice();
  });
});

function calculateTotalprice() {
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach((product) => {
    const pricePerUbit = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value;
    const totalpriceForProduct = pricePerUbit * quantity;
    totalPriceForAllProduct = totalPriceForAllProduct + totalpriceForProduct;
  });
  document.getElementById("total-price-for-all-product").innerHTML =
    totalPriceForAllProduct + "$";
}

const CitiesByCountery = {
  sa: ["جدة", "الرياض"],
  eg: ["القاهرة", "الاسكندرية"],
  jo: ["عمان", "الزرقاء"],
  sy: ["دمشق", "حلب", "حماء"],
};

document.querySelectorAll('select[name="country"]').forEach((item) => {
  item.addEventListener("change", () => {
    const country = item.value;

    const cities = CitiesByCountery[country];
    document
      .querySelectorAll("#paymentcities option")
      .forEach((option) => option.remove());

    const firstoption = document.createElement("option");
    const optiontext = document.createTextNode("اختر مدينة");
    firstoption.appendChild(optiontext);
    firstoption.setAttribute("value", "");
    firstoption.setAttribute("disabled", "true");
    firstoption.setAttribute("selected", "true");

    const city_options = document.getElementById("paymentcities");
    city_options.appendChild(firstoption);

    cities.forEach((city) => {
      const newoption = document.createElement("option");
      const optiontext = document.createTextNode(city);
      newoption.appendChild(optiontext);
      newoption.setAttribute("value", city);
      city_options.appendChild(newoption);
    });
  });
});

// اخفاء واظهار حقول البطاقة الائتمانية

document
  .querySelectorAll('#form-checkout  input[name="payment-method"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      const paymentmethod = item.value;

      const creditecardinputs = document.querySelectorAll(
        "#credit_card_info input"
      );

      if (paymentmethod === "on_delevary") {
        creditecardinputs.forEach((input) => {
          input.style.display = "none";
        });
      } else {
        creditecardinputs.forEach((input) => {
          input.style.display = "block";
        });
      }
    });
  });

document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوظة للمتجر سنة" + new Date().getFullYear();
