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
