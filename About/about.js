function showMoreInfo() {
    const moreInfo = document.getElementById("more-info");
    // Kontrollera om elementet är dolt  eller tomt 
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
         // Om elementet är dolt, visa det som en block
        moreInfo.style.display = "block";
    } 
}
// Funktion för att dölja knappen när den klickas på
function hideButton(button) {
    button.style.display = "none";
}