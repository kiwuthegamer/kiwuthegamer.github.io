var card = document.querySelector(".card");
var cardText = document.querySelector(".cardText");

document.body.addEventListener("mousemove", (e) => {
  let x = (innerWidth / 2 - e.pageX) / -15;
  let y = (innerHeight / 2 - e.pageY) / 15;
  var mouseX = e.pageX;
  var mouseY = e.pageY;
  card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  document.querySelector(".emoji").style.transform = "translate3d(0, 0, 60px)";
  cardText.style.transform = "translate3d(0, 0, 40px)";
});

document.body.addEventListener("mouseleave", (e) => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  document.querySelector(".emoji").style.transform = "translate3d(0, 0, 0px)";
  cardText.style.transform = "translate3d(0, 0, 0px)";
});

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://icanhazdadjoke.com/", false);
xmlHttp.setRequestHeader("Accept", "application/json")
xmlHttp.send( null );
cardText.innerText = JSON.parse(xmlHttp.response).joke