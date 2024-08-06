// Vänta tills hela dokumentet har laddats innan du kör koden
document.addEventListener("DOMContentLoaded", function() {
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks") ;
// Växla klassen "active" på navLinks elementet när hamburger-ikonen klickas
hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("active")
});
})


