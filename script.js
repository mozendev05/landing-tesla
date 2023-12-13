const header = document.querySelector(".Header");
const heroTexts = document.querySelectorAll(".HeroSection-header");
const heroSubtitles = document.querySelectorAll(".HeroSection-subtitle");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: .9
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const {isIntersecting} = entry;
        if(isIntersecting) {
            const color = entry.target.getAttribute("data-header-color");
            
         heroTexts.forEach(text => {
                text.style.color = color;
            });

            header.style.color = color;

            heroSubtitles.forEach(subtitle =>{
                subtitle.style.setProperty("--bgcolor", color);
            });

            openMenuBtn.style.color = color;
        };
    });
}, observerOptions);

const heroSections = document.querySelectorAll(".HeroSection");
heroSections.forEach(section => observer.observe(section));


const navLinks = document.querySelectorAll(".Header-navLink");
const navBackdrop = document.querySelector(".Header-navBackdrop");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", ()=>{
        const {left, top, width, height} = link.getBoundingClientRect();

        navBackdrop.style.setProperty("--left", `${left}px`);
        navBackdrop.style.setProperty("--top", `${top}px`);
        navBackdrop.style.setProperty("--width", `${width}px`);
        navBackdrop.style.setProperty("--height", `${height}px`);

        navBackdrop.style.opacity = "1";
        navBackdrop.style.visibility = "visible";

    });

    link.addEventListener("mouseleave",()=>{
        navBackdrop.style.opacity = "0";
        navBackdrop.style.visibility = "hidden";
    });
});

const openMenuBtn = document.querySelector(".Header-openMenuBtn");
const closeMenuBtn = document.querySelector(".MobileMenu-closeBtn");
const menuMobile = document.querySelector(".MobileMenu");

closeMenuBtn.addEventListener("click",()=>{
    menuMobile.close();
});

openMenuBtn.addEventListener("click",()=>{
    menuMobile.setAttribute("open", true);
});


