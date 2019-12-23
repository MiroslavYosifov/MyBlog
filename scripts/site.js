// window.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementsByTagName('body')[0].classList.add('loaded');
// });

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

function increaseHeader() {
    if (window.scrollY !== 0){
        document.getElementsByClassName('site-header')[0].className = "site-header active";
    } else {
        document.getElementsByClassName('site-header')[0].className = "site-header";
    }
}