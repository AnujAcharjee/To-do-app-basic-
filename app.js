let searchH = document.querySelector(".searchH");
let buttonH = document.querySelector(".buttonH");
let pgHolder = document.querySelector(".pgHolder");



buttonH.addEventListener("click", () => {
    console.log("new pg added");

    newPg();
});

function newPg() {
    let newPgDiv = document.createElement("div");
    let pgH = document.createElement("div");
    let pgB = document.createElement("div");

    newPgDiv.classList.add("newPg");
    pgH.classList.add("pgH");
    pgB.classList.add("pgB");
    
    pgHolder.appendChild(newPgDiv);
    newPgDiv.appendChild(pgH);
    newPgDiv.appendChild(pgB);

    pgElements(pgH, pgB);
}

function pgElements(pgH, pgB) {
    console.log("pg elements added");
    
    let pgAddBtn = document.createElement("button");
    let pgDelBtn = document.createElement("button");
    let pgInput = document.createElement("input");
    let pgUl = document.createElement("ul");
    let pgTitle = document.createElement("div");

    pgAddBtn.innerText = "Add";
    pgDelBtn.innerText = "Delete List";
    pgInput.innerText = "Enter your List items";
    pgTitle.innerText = `TITLE: ${searchH.value}`;
    searchH.value ="";

    pgDelBtn.classList.add("pgDelBtn");
    pgAddBtn.classList.add("pgAddBtn");
    pgInput.classList.add("pgInput");
    pgUl.classList.add("pgUl");
    pgTitle.classList.add("pgTitle");
    
    pgH.appendChild(pgInput);
    pgH.appendChild(pgAddBtn);
    pgH.appendChild(pgDelBtn);
    pgB.appendChild(pgTitle); 
    pgB.appendChild(pgUl);

    let liDelBtn; // Define liDelBtn outside of the pgAddBtn event listener


    //ul item append & item delete btn
    pgAddBtn.addEventListener("click", () => {
        console.log("item added");
        let pgLi = document.createElement("li");
        pgLi.innerText = pgInput.value;
        pgUl.appendChild(pgLi);

        liDelBtn = document.createElement("button");
        liDelBtn.classList.add("delLi");
        liDelBtn.innerText = "x";
        pgLi.appendChild(liDelBtn);

        pgInput.value = "";
    });

    //delete list item(li)
    pgB.addEventListener("click", (event) => {
        if(event.target.classList.contains("delLi")) {
            event.target.parentElement.remove();
        }
    })
    
    //delete list btn
    pgDelBtn.addEventListener("click", (event) => {
        if(event.target.classList.contains("pgDelBtn")) {
        event.target.parentElement.parentElement.remove();
        }
    console.log("list deleted");
    })
}




