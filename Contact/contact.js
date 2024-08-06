// Vänta tills hela dokumentet har laddats
document.addEventListener("DOMContentLoaded", function() {
const contactForm = document.querySelector(".contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // // Hämta värden 
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const message= document.getElementById("message").value
    // Validera att alla fält är ifyllda
    if (name === "" || email === "" || phone === "" || message === ""){
       
        alert("Snälla fill out all fields.");
        return;
    } 
    //Skapa ett FormData-objek
    const formInfo = new FormData();
    formInfo.append("Name:", name);
    formInfo.append("Email:", email);
    formInfo.append("Phone:", phone);
    formInfo.append("Message:", message);
    // Skapa ett XMLHttpRequest-objekt för att skicka data
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:52330/About/About.html", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Your message has been sent!");
            contactForm.reset();
        } else {
            alert("There was an error sending your message.");
        }
    };

    xhr.send(formInfo);
});
});