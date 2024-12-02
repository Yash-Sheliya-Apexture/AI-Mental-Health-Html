// <-- ========== Menu Section functionality Start========== -->

// JavaScript to handle-button Main Menu toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
    const menu = document.getElementById("main-menu");
    const body = document.body;

    // Toggle the menu visibility
    menu.classList.toggle("show");

    // Disable or enable page scroll
    if (menu.classList.contains("show")) {
        body.classList.add("no-scroll"); // Disable scroll
    } else {
        body.classList.remove("no-scroll"); // Enable scroll
    }
});



// Main-Menu active link functionality 


// <-- ========== Menu Section functionality End========== -->


// <-- ========== Slider Section functionality Start ========== -->

document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector('#logoContainer');

  // Clone the images 3 times for seamless infinite scrolling
  const clone = logoContainer.innerHTML;
  logoContainer.innerHTML += clone + clone + clone; // Cloning 3 times

  // Add click functionality to toggle active class
  const logoImages = document.querySelectorAll('.logos-slide img');

  logoImages.forEach((image) => {
    image.addEventListener('click', () => {
      // Remove 'active' from all images
      logoImages.forEach((img) => img.classList.remove('active'));

      // Add 'active' to the clicked image
      image.classList.add('active');
    });
  });
});

// <-- ========== Slider Section functionality End ========== -->



// <-- ========== Chat Section functionality Start ========== -->
let currentIndex = 1;
const totalItems = 3;

document.getElementById("nextButton").addEventListener("click", () => {
  const currentImage = document.getElementById(`chatImage${currentIndex}`);
  const currentReview = document.getElementById(`chatReview${currentIndex}`);
  currentImage.classList.add("fade-out-left");
  currentReview.classList.add("fade-out-left");

  setTimeout(() => {
    currentImage.style.display = "none";
    currentReview.style.display = "none";
    currentImage.classList.remove("fade-out-left");
    currentReview.classList.remove("fade-out-left");

    currentIndex = (currentIndex % totalItems) + 1;

    const nextImage = document.getElementById(`chatImage${currentIndex}`);
    const nextReview = document.getElementById(`chatReview${currentIndex}`);
    nextImage.style.display = "block";
    nextReview.style.display = "block";

    nextImage.classList.add("fade-in");
    nextReview.classList.add("fade-in");

    setTimeout(() => {
      nextImage.classList.remove("fade-in");
      nextReview.classList.remove("fade-in");
    }, 500);
  }, 500);
});
// <-- ========== Chat Section functionality End ========== -->



// <-- ========== Footer Section functionality Start ========== -->

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Get all the footer nav items
  const navItems = document.querySelectorAll('.footer-nav-item a');

  // Add event listener to each link
  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Remove the 'active' class from all links
      navItems.forEach(link => link.classList.remove('active'));

      // Add the 'active' class to the clicked link
      e.target.classList.add('active');
    });
  });
});

// <-- ========== Footer Section functionality End ========== -->








