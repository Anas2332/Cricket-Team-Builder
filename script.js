document.querySelector(".btn").addEventListener("click" , ()=>{
    let teamName = document.querySelector(".input").value
    console.log(teamName);
    if (teamName === "") {
        alert("Please enter your team name!!!")
        return;
    }
    document.getElementById("reg").classList.add("hidden");
    document.querySelector(".teamName").innerText = teamName;
    document.getElementById("section").style.display = "block";
})
document.querySelector(".downarrow").addEventListener("click" , ()=>{
    document.querySelector(".categories").classList.toggle("show")
})