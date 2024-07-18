document.addEventListener("DOMContentLoaded", function () {
  let count = 1;
  let price = 350;

  function updateCount() {
    document.getElementById("countNum").innerHTML = count;
  }

  function updatePrice() {
    const totalPrice = count * price;
    document.getElementById("product").innerHTML = totalPrice;
  }

  function updateSubtotal() {
    const subtotal = count * price;
    document.getElementById("subtotal").innerHTML = subtotal;
}

  document.getElementById("minButton").onclick = function () {
    if (count > 1) {
      count -= 1;
      updateCount();
      updatePrice();
      updateSubtotal()
    }
  };

  document.getElementById("maxButton").onclick = function () {
    if (count < 10) {
      count += 1;
      updateCount();
      updatePrice();
      updateSubtotal()
    }
  };

  updateCount();
  updatePrice(); 
  updateSubtotal()// Initial call to update the displayed count
});

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

document.addEventListener("DOMContentLoaded", () => {});
