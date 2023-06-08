// Kiwuthegamer Homepage
if (!document.body.classList.contains("homepage")) {
  document.body.innerHTML = `<a href="/"><img class="home-link" src="/Assets/Logo/Red.png"></a>` + document.body.innerHTML
}

// Copywright Footer
document.body.innerHTML += `<footer>
<div class="card-text" style="white-space: pre-line;">
  <br>
  Copyright &copy; <script>document.write(new Date().getFullYear())</script> Kevin George (kiwuthegamer) All Rights Reserved<br>
</div>
</footer>`

// Themes
const themeCount = 2

str = "<div class='theme-picker'>"
for(var i=0;i<themeCount;i++){
  str += "<div onclick='setTheme("+i+")'></div>"
}

document.body.innerHTML = str + "</div>" + document.body.innerHTML

function refreshThemes(){
  var theme = localStorage.getItem("themeID")
  if (theme == null){
    localStorage.setItem("themeID", 0)
  }
  for(var i=0;i<themeCount;i++){
    document.body.classList.remove("theme"+i)
  }
  document.body.classList.add("theme"+theme)
}

function setTheme(id){
  localStorage.setItem("themeID", id)
  refreshThemes()
}

refreshThemes()
