function clearAll(){
    batter = [];
    bowler = [];
    additional = [];
    experience = "";
    strategy = "";
    format = "";
    document.querySelector(".batter1").innerHTML = "";
    document.querySelector(".bowler1").innerHTML = "";
    document.querySelector(".additionals1").innerHTML = "";
    document.querySelector(".summary-body").innerHTML = "";
    document.querySelector(".team-cont2").classList.add("hidden");
    document.querySelector("#reg").style.display = "block";
    document.querySelector(".btn5").style.display = "none";
    document.querySelectorAll("input").forEach(e => {e.value = ""});
    document.querySelector(".btn2").classList.add("hidden");
}
let batter = [];
let bowler = [];
let additional = [];
let experience = "";
let reg = document.querySelector("#reg");
let main = document.querySelector(".main");
let team = document.querySelector(".yourTeam");
let team2 = document.querySelector(".team-cont2");
function validateExperience(input) {
    if (input.value < 1 || input.value > 50) {
        input.value = 0;
    }
}
function validateName(input) {
    if (input.value.length > 15) {
        input.value = input.value.slice(0, 15);
    }
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}
function update() {
    if (batter.length + bowler.length === 11) {
        document.querySelector(".batsman").classList.add("hidden")
        document.querySelector(".bowlers").classList.add("hidden")
    }else{
        document.querySelector(".batsman").classList.remove("hidden");
        document.querySelector(".bowlers").classList.remove("hidden");
    }
    if (additional.length === 4) {
        document.querySelector(".additional").classList.add("hidden");
    } else {
        document.querySelector(".additional").classList.remove("hidden");
    }
    if (bowler.length === 0 && batter.length === 0 && additional.length === 0) {
        document.querySelector(".btn2").classList.add("hidden");
    } else {
        document.querySelector(".btn2").classList.remove("hidden");
    }
    if (batter.length + bowler.length === 11 && additional.length === 4) {
        document.querySelector(".btn4").classList.remove("hidden");
    } else {
        document.querySelector(".btn4").classList.add("hidden");
    }
}
function myTeam() {
    document.querySelector(".bowler").innerHTML = "";
    document.querySelector(".batter").innerHTML = "";
    document.querySelector(".additionals").innerHTML = "";
    bowler.forEach(e =>{
        let div = document.createElement("div");
        div.className = "bow"
        let icon = document.createElement("i");
        icon.className = "fas fa-times";
        icon.id = "fa"
        let p = document.createElement("p");
        p.innerText = e;
        div.append(p , icon);
        document.querySelector(".bowler").append(div)
        icon.addEventListener('click', ()=>{
            let val = icon.previousSibling.textContent;
            bowler = bowler.filter(e => e !== val)
            div.remove();
            document.querySelector(".remove").classList.remove("shown");
            void document.querySelector(".remove").offsetWidth;
            document.querySelector(".remove").classList.add("shown");
            update()
        })
    })
    batter.forEach(e =>{
        let div1 = document.createElement("div");
        div1.className = "batt"
        let icon = document.createElement("i");
        icon.className = "fas fa-times";
        let p = document.createElement("p");
        p.innerText = e;
        div1.append(p , icon)
        document.querySelector(".batter").append(div1);
        icon.addEventListener('click', ()=>{
            let val = icon.previousSibling.textContent;
            batter = batter.filter(e => e !== val)
            div1.remove();
            document.querySelector(".remove").classList.remove("shown");
            void document.querySelector(".remove").offsetWidth;
            document.querySelector(".remove").classList.add("shown");
            update()
        })
    })
    additional.forEach(e =>{
        let div2 = document.createElement("div");
        div2.className = "addition"
        let icon = document.createElement("i");
        icon.className = "fas fa-times";
        let p = document.createElement("p");
        p.innerText = e;
        div2.append(p,icon)
        document.querySelector(".additionals").append(div2);
        icon.addEventListener('click', ()=>{
            let val = icon.previousSibling.textContent;
            additional = additional.filter(e => e !== val);
            div2.remove();
            document.querySelector(".remove").classList.remove("shown");
            void document.querySelector(".remove").offsetWidth;
            document.querySelector(".remove").classList.add("shown");
            update()
        })
    })
    update();
}
function runPrompt(category) {
    let button = document.querySelector("#sub");
    let newbtn = button.cloneNode(true)
    button.replaceWith(newbtn)
    newbtn.addEventListener("click", () => {
        let playerInp = document.querySelector(".box .input1")
        if (playerInp.value === "") {
            document.querySelector(".notadded").classList.remove("shown");
            void document.querySelector(".notadded").offsetWidth;
            document.querySelector(".notadded").classList.add("shown");
            return;
        }
        let value = document.querySelector(".input1").value;
        if (batter.some(e => e === value) || bowler.some(e => e === value) || additional.some(e => e === value)) {
            document.querySelector(".exist").classList.remove("shown");
            void document.querySelector(".exist").offsetWidth;
            document.querySelector(".exist").classList.add("shown");
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
        myTeam();
        document.querySelector(".added").classList.remove("shown")
        void document.querySelector(".added").offsetWidth;
        document.querySelector(".added").classList.add("shown");
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
    let teamName = document.querySelector(".input").value;
    experience = document.querySelector("#experience").value;
    strategy = document.querySelector("#strategy").value;
    strategy = strategy.toLowerCase()
    format = document.querySelector("#format").value;
    if (teamName === "" || experience === "" || strategy === "" || format === "") {
        document.querySelector(".reg").classList.remove("shown");
        void document.querySelector(".reg").offsetWidth;
        document.querySelector(".reg").classList.add("shown");
        return;
    }
    if (format !== "T20" && format !== "ODI" && format !== "TEST") {
        document.querySelector(".error").classList.remove("shown");
        void document.querySelector(".error").offsetWidth;
        document.querySelector(".error").classList.add("shown");
        return;
    }
    if (strategy !== "defensive" && strategy !== "aggressive" && strategy !== "balanced") {
        document.querySelector(".error").classList.remove("shown");
        void document.querySelector(".error").offsetWidth;
        document.querySelector(".error").classList.add("shown");
        return;
    }
    reg.style.display = "none";
    document.querySelectorAll(".teamName").forEach(element => {
        element.innerText = teamName;
    });
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
    main.style.display = "block";
})
document.querySelector(".btn4").addEventListener("click", ()=>{
    team.style.display = "none";
    team2.classList.remove("hidden");
    batter.forEach(e =>{
        let h4 = document.createElement("h4");
        h4.className = "player";
        h4.innerText = "Batsman : " + e;
        document.querySelector(".batter1").append(h4);
    })
    bowler.forEach(e =>{
        let h4 = document.createElement("h4");
        h4.className = "player";
        h4.innerText = "Bowler : " + e;
        document.querySelector(".bowler1").append(h4);
   })
   additional.forEach(e =>{
    let h4 = document.createElement("h4");
    h4.className = "player";
    h4.innerText = "Additional : " + e;
    document.querySelector(".additionals1").append(h4);
})
    let summary = document.createElement("h4");
    summary.className = "player";
    summary.innerText = `
    Batsmen: ${batter.join(", ")}
    Bowlers: ${bowler.join(", ")}
    Additional Players: ${additional.join(", ")}
    Team Strategy: ${strategy}
    Experience: ${experience} years
    Format: ${format}`;
    document.querySelector(".summary-body").append(summary);
    document.querySelector(".correct").classList.add("shown");
    document.querySelector(".btn5").style.display = "block";
})
document.querySelector(".btn5").addEventListener("click", ()=>{clearAll()});