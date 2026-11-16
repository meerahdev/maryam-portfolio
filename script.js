
// GET THE MENU BUTTON
const menuBtn = document.getElementById("menu-btn");

// GET THE NAVIGATION LINKS
const navLinks = document.getElementById("nav-links");

// OPEN AND CLOSE THE MENU
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});
