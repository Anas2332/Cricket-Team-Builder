let batter = [];
let bowler = [];
let additional = [];
let reg = document.querySelector("#reg");
let main = document.querySelector(".main");
let team = document.querySelector(".yourTeam");
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
    let teamName = document.querySelector(".input").value
    if (teamName === "") {
        document.querySelector(".reg").classList.remove("shown");
        void document.querySelector(".reg").offsetWidth;
        document.querySelector(".reg").classList.add("shown");
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
    main.style.display = "block";
})