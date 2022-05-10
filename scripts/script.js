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
document.querySelectorAll(".btn").forEach((item) =>
  item.addEventListener("click", (e) => {
    var cartCount = parseInt(document.getElementById("cart-count").innerHTML);

    cartCount++;
    cartText.innerHTML = cartCount.toString();
    alert(e.path[1].children[0].innerText + " has been added to the cart.");
  })
);
