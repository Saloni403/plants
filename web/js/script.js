let openmenu = document.querySelector(".openmenu")
let menu = document.querySelector(".menu")
let closemenu = document.querySelector(".closemenu")
openmenu.addEventListener("click",(e)=>{
    e.stopPropagation();
menu.style.right="0";
document.body.style.overflow="hidden"
})
closemenu.addEventListener("click",(e)=>{
    e.stopPropagation();
menu.style.right="-350px";
document.body.style.overflow = "auto"; 
})
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !openmenu.contains(e.target)) {
        menu.style.right = "-350px";
    }
});

document.querySelector(".bi-facebook").addEventListener("click",()=>{
    window.open("", "_blank")
    
})
document.querySelector(".bi-instagram").addEventListener("click",()=>{
    window.open("", "_blank")
    
})
document.querySelector(".bi-whatsapp").addEventListener("click",()=>{
    window.open("https://wa.me/919876543123", "_blank")
    
})