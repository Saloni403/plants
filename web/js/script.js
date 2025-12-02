let openmenu = document.querySelector(".openmenu")
let menu = document.querySelector(".menu")
let closemenu = document.querySelector(".closemenu")
openmenu.addEventListener("click",(e)=>{
    e.stopPropagation();
menu.style.left="0";
})
closemenu.addEventListener("click",(e)=>{
    e.stopPropagation();
menu.style.left="-350px";
})
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !openmenu.contains(e.target)) {
        menu.style.left = "-350px";
    }
});