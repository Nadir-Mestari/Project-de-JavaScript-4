

const nav = document.querySelector("nav")
let scrol = 0;
window.addEventListener("scroll", (e) => {
    console.log(window.scrollY)
    if (window.scrollY < scrol) {
        nav.style.top = 0 + "px";
    } else {
        nav.style.top = -100 + "px";
    }

    scrol = window.scrollY
})
