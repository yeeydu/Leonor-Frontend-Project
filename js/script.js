const nav = document.getElementById("navbar")
fetch("/navbar.html")
    .then(res => res.text())
    .then(data => { nav.innerHTML = data })