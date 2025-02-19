document.querySelector('.back-video').addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});

document.querySelector('.explore-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var popupButton = document.getElementById("popup-button");
    var modal = document.getElementById("poster-modal");
    var closeBtn = document.querySelector(".close");

    // Show the modal when the button is clicked
    popupButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Hide the modal when close button is clicked
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Hide modal if clicked outside the image
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
function openModal() {
    document.getElementById("poster-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("poster-modal").style.display = "none";
}
const slider = document.getElementById('facility-slider');
const cards = document.querySelectorAll('.facility-card');
let scrollAmount = 0;

function autoScroll() {
    const cardWidth = cards[0].offsetWidth + 20; // Including margin
    scrollAmount += cardWidth;

    // Reset to the beginning when the end is reached
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// Set interval for automatic scrolling (change 2000 for speed)
setInterval(autoScroll, 2000);
