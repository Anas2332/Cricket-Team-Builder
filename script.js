document.querySelector(".btn").addEventListener("click" , ()=>{
    document.getElementById("reg").classList.add("hidden")
    document.getElementById("section").style.display = "block"
})
document.querySelector(".downarrow").addEventListener("click" , ()=>{
    document.querySelector(".categories").classList.toggle("show")
})