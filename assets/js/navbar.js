const nav = document.querySelector(".m-nav");
const navBtn = document.querySelector(".m-nav-btn");

/* Globals Vars */
var isNavClosed = true;

function showNavigationMenu () {
    nav.classList.add("m-expand");
    navBtn.classList.add("m-active");
    isNavClosed = false;
}

function hideNavigationmenu() {
    nav.classList.remove("m-expand");
    navBtn.classList.remove("m-active");
    isNavClosed = true;
}

function handleNavigationMenu() {
    if (nav && navBtn) {
        navBtn.addEventListener("click", (e) => {
            if (navBtn.classList.contains("m-active")) {
                hideNavigationmenu();
            } else {
                nav.classList.add("m-display");
                /* This will give the element enough time 
                   to display and apply the transition. */
                setTimeout(showNavigationMenu, 1);
            }
        });

        nav.addEventListener("transitionend", (e) => {
            if (e.propertyName === "height" && isNavClosed) {
                nav.classList.remove("m-display");
            }
        });
    }
}

window.addEventListener("load", (e) => {
    handleNavigationMenu();
});