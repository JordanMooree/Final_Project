//search on blog page
let cards = document.querySelectorAll(".card");

function Search() {
  let search_query = document.getElementById("searchbox").value;
  for (var i = 0; i < cards.length; i++) {
    if (
      cards[i].textContent.toLowerCase().includes(search_query.toLowerCase())
    ) {
      cards[i].classList.remove("hide");
    } else {
      cards[i].classList.add("hide");
    }
  }
}
//delay
let typingTimer;
let typeInterval = 500;

let searchInput = document.getElementById("searchbox");
searchInput.addEventListener("keyup", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(Search, typeInterval);
});
