let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-60px"; // Hide the navbar (adjust the value as needed)
    } else {
        // Scrolling up
        navbar.style.top = "0"; // Show the navbar
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});
