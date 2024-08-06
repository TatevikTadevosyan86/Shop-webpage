// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery'); // Get the gallery container
    const leftArrow = document.getElementById('leftArrow'); // Get the left arrow button
    const rightArrow = document.getElementById('rightArrow'); // Get the right arrow button

    // Function to move gallery items to the left
    function moveLeft() {
        gallery.scrollLeft -= gallery.clientWidth; // Scroll gallery to the left by its width
    }

    // Function to move gallery items to the right
    function moveRight() {
        gallery.scrollLeft += gallery.clientWidth; // Scroll gallery to the right by its width
    }

    // Event listener for left arrow click
    leftArrow.addEventListener('click', moveLeft);

    // Event listener for right arrow click
    rightArrow.addEventListener('click', moveRight);

    const addToCard=document.querySelectorAll(".addToCard")
    const notificationContainer=document.getElementById("notification-container")
    addToCard.forEach(button =>{
        button.addEventListener("click", function(){
            const itemName= this.parentElement.querySelector("h3").innerText;
            showNotification(`${itemName} was added to the card!`);
        });
    });

    function showNotification(message){
        const notification = document.createElement("div");
        notification.classList.add("notification");
        notification.innerText=message;
        notificationContainer.appendChild(notification);

        setTimeout(()=>{
            notification.remove();
        },2000);
    };
        });
