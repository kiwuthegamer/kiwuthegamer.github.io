var items = [
  [
    {
      "img": "/Assets/Portfolio/GD/peter.png",
      "title": "q"
    },
    {
      "img": "https://unsplash.it/500/500",
      "title": "a",
      "shape": "long"
    }
  ],
  [
    {
      "img": "https://unsplash.it/1000/500",
      "title": "s",
      "url": "https://google.com/"
    },
    {
      "img": "https://unsplash.it/800/600",
      "title": "d",
      "shape": "long"
    }
  ]
]

function updateFilter(type){
  document.querySelector(".itemGrid").innerHTML = ""
  var section = items[type]
  for(var i=0;i<section.length;i++){
    var a = document.createElement("a")
    if (section[i].url){
      a.href = section[i].url
    }
    var div = document.createElement("div")
    div.classList.add("item")
    div.dataset.title = section[i].title
    div.dataset.shape = section[i].shape
    div.style.setProperty("--img", "url("+section[i].img+")")
    a.appendChild(div)
    document.querySelector(".itemGrid").appendChild(a)
  }
}

updateFilter(0)
