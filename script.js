let batter = [];
let bowler = [];
let additional = [];
let reg = document.querySelector("#reg");
let main = document.querySelector(".main");
let team = document.querySelector(".yourTeam");
function myTeam() {
    document.querySelector(".bowler").innerHTML = "";
    document.querySelector(".batter").innerHTML = "";
    document.querySelector(".additionals").innerHTML = "";
    bowler.forEach(e =>{
        let div = document.createElement("div");
        div.className = "bow"
        let icon = document.createElement("i");
        icon.className = "fas fa-times";
        let p = document.createElement("p");
        p.innerText = e;
        div.append(p , icon);
        document.querySelector(".bowler").append(div)
    })
    batter.forEach(e =>{
        let div1 = document.createElement("div");
        div1.className = "batt"
        let icon = document.createElement("i");
        icon.className = "fas fa-times";
        let p = document.createElement("p");
        p.innerText = e;
        div1.append(p , icon)
        document.querySelector(".batter").append(div1)
    })
    additional.forEach(e =>{
        let div2 = document.createElement("div");
        div2.className = "addition"
        let icon = document.createElement("i");
        icon.className = "fas fa-times";
        let p = document.createElement("p");
        p.innerText = e;
        div2.append(p,icon)
        document.querySelector(".additionals").append(div2)
    })
}
function runPrompt(category) {
    let button = document.querySelector("#sub");
    let newbtn = button.cloneNode(true)
    button.replaceWith(newbtn)
    newbtn.addEventListener("click", () => {
        let playerInp = document.querySelector(".box .input1")
        if (playerInp.value === "") {
            alert("Please enter your player's name!!!");
            return;
        }
        let val = playerInp.value;
        if (category === "batter") {
            batter.push(val)
        } else if(category === "bowler") {
            bowler.push(val)
        }else{
            additional.push(val)
        }
        if (batter.length > 0 || bowler.length > 0 || additional.length > 0) {
            document.querySelector(".btn2").classList.remove("hidden")
        }
        myTeam();
        document.querySelector(".box").classList.remove("show")
        playerInp.value = "";
    });
}
function addPlayer(category) {
    let box = document.querySelector(".box");
    box.classList.add("show");
    runPrompt(category);
}
document.querySelector(".btn").addEventListener("click" , ()=>{
    let teamName = document.querySelector(".input").value
    if (teamName === "") {
        alert("Please enter your team name!!!")
        return;
    }
    reg.style.display = "none";
    document.querySelector(".teamName").innerText = teamName;
    main.style.display = "block";
})
document.querySelector(".downarrow").addEventListener("click" , ()=>{
    document.querySelector(".categories").classList.toggle("show")
})
document.querySelector(".addbatter").addEventListener("click" , ()=>{ addPlayer("batter");})
document.querySelector(".addbowler").addEventListener("click" , ()=>{addPlayer("bowler");})
document.querySelector(".add-additionals").addEventListener("click" , ()=>{addPlayer("additional");})
document.querySelector(".btn2").addEventListener("click", ()=>{
    main.style.display = "none"
    team.style.display = "block";
})
document.querySelector(".btn3").addEventListener("click", ()=>{
    team.style.display = "none";
    main.style.display = "block"
})