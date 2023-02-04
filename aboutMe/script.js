for(var i=0;i<cards.length;i++){
  card = cards[i]
  if(card.type == "sectionheader"){
    document.querySelector(".card-container").innerHTML += `<br><div class="card-text-container"><div class="card-title">`+card.title+`</div><div class="card-text">`+card.content+`</div></div>`
  } else {
    document.querySelector(".card-container").innerHTML += `<div class="card" onclick="window.open('`+card.url+`')"><div class="card-text-container"><div class="card-title">`+card.title+`</div><div class="card-text">`+card.content+`</div></div></div>`
  }
}