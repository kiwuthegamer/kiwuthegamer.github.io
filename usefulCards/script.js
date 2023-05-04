const cardContainer = document.querySelector(".card-container")
const searchBar = document.querySelector(".search-bar")

function updateCards(){
  var filter = searchBar.value;
  cardContainer.innerHTML = "";

  for(var i=0;i<cards.length;i++){
    card = cards[i]
    if(card.type == "sectionheader"){
      if(filter){
        continue;
      }
      cardContainer.innerHTML += `<br><div class="card-text-container"><div class="card-title">`+card.title+`</div><div class="card-text">`+card.content+`</div></div>`
    } else {
      if (filter) {
        if (!card.title.toLowerCase().includes(filter.toLowerCase()) && !card.content.toLowerCase().includes(filter.toLowerCase())) {
          continue;
        }
      }
      cardContainer.innerHTML += `<div class="card" onclick="window.open('`+card.url+`')"><div class="card-text-container"><div class="card-title">`+card.title+`</div><div class="card-text">`+card.content+`</div></div></div>`
    }
  }
}

updateCards()