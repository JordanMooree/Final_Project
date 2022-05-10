//search on blog page
let cards = document.querySelectorAll('.card')
    
function Search() {
    let search_query = document.getElementById("searchbox").value;
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("hide");
        } else {
            cards[i].classList.add("hide");
        }
    }
}
//delay
let typingTimer;               
let typeInterval = 500;  

let searchInput = document.getElementById('searchbox');
searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(Search, typeInterval);
});

var cartText = document.getElementById("cart-count");
var cartBtn = document.getElementById("cart");
var dropdown = document.getElementById("dropdown");

var list = document.getElementById("append-items");
var totalAmount = document.getElementById("totalAmount");

var submitPurchase = document.getElementById("purchase");

// Alert user what item they added and append to list
document.querySelectorAll(".btn").forEach((item) =>
  item.addEventListener("click", (e) => {
    var cartCount = parseInt(document.getElementById("cart-count").innerHTML);
    var price = e.path[1].children[1].innerText.split("$")[1];
    var path =
      e.composedPath()[1].innerText.split("\n")[0] ||
      e.path[1].children[0].innerText;

    cartCount++;
    cartText.innerHTML = cartCount.toString();
    alert(path + " has been added to the cart.");

    // Add to list
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(path));

    list.appendChild(entry);
    entry.innerHTML += `<p>$${price}</p>`;
    entry.innerHTML +=
      '<button class="btn-cart"><i class="fa-solid fa-plus add"></i></button>';
    entry.innerHTML +=
      '<button class="btn-cart"><i class="fa-solid fa-trash delete"></i></button>';
    entry.innerHTML += "<p>Qty: <span>1</span></p>";

    // Add more items to cart by pressing '+'
    document.querySelectorAll(".add").forEach((i) =>
      i.addEventListener("click", (e) => {
        var innerPrice = e.path[2].children[0].innerText.split("$")[1];
        var newAmt = parseInt(innerPrice);
        var newTotalAmt = newAmt + parseInt(totalAmount.innerText);
        totalAmount.innerHTML = newTotalAmt.toString();
        var qtyText = e.path[2].children[3].children[0].innerText;
        var qty = parseInt(qtyText);
        qty++;

        e.path[2].children[3].children[0].innerText = qty.toString();
      })
    );
    document.querySelectorAll(".delete").forEach((i) =>
      i.addEventListener("click", (e) => {
        // Subtract Total - (QTY * Price)
        var curPrice = parseInt(e.path[2].children[0].innerText.split("$")[1]);
        var qtyNum = parseInt(e.path[2].children[3].children[0].innerText);
        var currentAmt = parseInt(totalAmount.innerText);
        var newAmountAfterDelete = currentAmt - qtyNum * curPrice;
        if (newAmountAfterDelete < 0) newAmountAfterDelete = 0;
        totalAmount.innerText = newAmountAfterDelete.toString();
        entry.remove();
        cartCount--;
        cartText.innerHTML = cartCount.toString();
      })
    );
    // Total amount calculation (Addition, adding items to cart)
    var itemPrice = parseInt(e.path[1].children[1].innerText.split("$")[1]);
    var total = itemPrice + parseInt(totalAmount.innerText);
    totalAmount.innerHTML = total.toString();
  })
);

cartBtn.addEventListener("click", () => {
  dropdown.classList.toggle("display");
});

submitPurchase.addEventListener("click", () => {
  alert("Thank you for your order!");
});
