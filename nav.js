let drop=document.querySelector("#bars")
let sec=document.querySelector("section")

drop.addEventListener("click",()=>{
    if (sec.style.display=="none")
        sec.style.display="flex"
    else
        sec.style.display="none"
})