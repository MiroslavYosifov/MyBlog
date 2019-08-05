window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByTagName('body')[0].classList.add('loaded');
});

// scripts for navbar
function showNav(){
    let navbar = document.getElementById('navbar');
    let navButton = document.getElementsByClassName('nav-button');

    if (navbar.style.display === "flex" && window.screen.width <= 480) {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}

// script for space info