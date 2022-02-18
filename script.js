let burger=document.querySelector(".burger")
let links=document.querySelector(".links")
let navbar=document.querySelector(".navbar")


burger.addEventListener('click',()=>{
    navbar.classList.toggle("h-class")
    links.classList.toggle("v_class")
    
})