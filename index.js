const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active")

    // Check if the menu is active to toggle the icon
    if (menu.classList.contains("active")) {
        hamburger.innerHTML = '<box-icon name="x" color="#ffffff" class="size"></box-icon>';
    } else {
        hamburger.innerHTML = '<box-icon name="menu" color="#ffffff" class="size"></box-icon>';
    }
});


function header() {
    var navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    const header = document.querySelector(".header");
    const navlink = document.querySelector(".nav-links");
    var headerHeight = header.offsetHeight;

    window.addEventListener('scroll', ()=> {
        if (window.scrollY >= headerHeight) {
            logo.classList.add("active");
            navlink.classList.add("active");
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove('sticky');
            logo.classList.remove("active");
            navlink.classList.remove("active");
        }
    });
}

header();
