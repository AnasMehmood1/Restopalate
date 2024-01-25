const circleDots = document.querySelectorAll('.circle-dot');
const sections = document.querySelectorAll('.section');

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const triggerPosition = sectionTop + sectionHeight / 2;

        if (scrollPosition >= triggerPosition) {
            circleDots.forEach((dot, dotIndex) => {
                dot.classList.remove('filled');
                if (dotIndex === index) {
                    dot.classList.add('filled');
                }
            });
        }
    });
};

const handleDotClick = (index) => {
    const section = sections[index];
    const sectionTop = section.offsetTop;
    
    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', handleScroll);

circleDots.forEach((dot, index) => {
    dot.addEventListener('click', () => handleDotClick(index));
});

handleScroll();








const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-links");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active")

    
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

    window.addEventListener('scroll', () => {
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

function Restaurent() {
    var navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    const navlink = document.querySelector(".nav-links");

    var headerHeight = document.querySelector(".restaurent-header").offsetHeight;

    window.addEventListener('scroll', () => {
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


Restaurent();

function contact() {
    var navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    const navlink = document.querySelector(".nav-links");

    var headerHeight = document.querySelector(".contact-header").offsetHeight;

    window.addEventListener('scroll', () => {
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


contact();







