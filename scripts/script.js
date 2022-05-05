var cartText = document.getElementById("cart-count");
document.querySelectorAll(".btn").forEach((item) =>
  item.addEventListener("click", (e) => {
    var cartCount = parseInt(document.getElementById("cart-count").innerHTML);

    cartCount++;
    cartText.innerHTML = cartCount.toString();
    alert(e.path[1].children[0].innerText + " has been added to the cart.");
  })
);
