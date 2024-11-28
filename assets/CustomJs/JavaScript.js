// <-- ========== Menu Section functionality Start========== -->

// JavaScript to handle Main Menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  menuButton.addEventListener('click', function () {
    mainMenu.classList.toggle('active'); // Toggle the menu visibility
  });
});
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
let currentIndex = 1; // To keep track of the current image/review
const totalItems = 3; // Total number of images and reviews

document.getElementById("nextButton").addEventListener("click", function () {
  // Hide the current image and review
  document.getElementById(`chatImage${currentIndex}`).style.display = "none";
  document.getElementById(`chatReview${currentIndex}`).style.display = "none";

  // Increment the index (loop back to 1 if it exceeds totalItems)
  currentIndex = (currentIndex % totalItems) + 1;

  // Show the next image and review
  document.getElementById(`chatImage${currentIndex}`).style.display = "block";
  document.getElementById(`chatReview${currentIndex}`).style.display = "block";
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








