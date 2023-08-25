const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("nav-bar");

if (bar) {
     bar.addEventListener("click", () => {
         nav.classList.add("Active");
    })
}
if (close) {
     close.addEventListener("click", () => {
         nav.classList.remove("Active");
    })
}



