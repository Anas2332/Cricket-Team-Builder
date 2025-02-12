function runPrompt() {
    let button = document.querySelector("#sub")
    button.addEventListener("click", () => {  
        let box = document.querySelector(".box");
        if (document.querySelector(".input1").value === "") {
            alert("Please enter your player's name!!!");
            return;
        }
        document.querySelector(".box").classList.remove("show")
    });
}
function addPlayer() {
    let box = document.querySelector(".box");
    box.classList.add("show");
    runPrompt();
}
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
document.querySelector(".batter").addEventListener("click" , ()=>{ addPlayer();})
document.querySelector(".bowler").addEventListener("click" , ()=>{addPlayer();})
document.querySelector(".additionals").addEventListener("click" , ()=>{addPlayer();})