// minecraft fishing simulator

//Varibles to store html elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

// global varibles
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

//event functions
function selectSteve(){
    // Update Active Border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");

    //update character selection varible
    character = "Steve";
}

function selectAlex(){
    // Update Active Border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");

    //update character selection varible
    character = "Alex";
}

function fishOnce(){
    //test current character
    if(character === "Steve"){
        //user seteve probabliilty distribution for fishing
        let randNum = Math.random();
        console.log(randNum);

        if(randNum < 0.7){
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        }else if(randNum < 0.9){
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
        }else if(randNum < 0.95){
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;
        }else{
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }else{
        //user alex probablility distribution for fishing
        let randNum = Math.random();
        console.log(randNum);

        if(randNum < 0.1){
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        }else if(randNum < 0.2){
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
        }else if(randNum < 0.5){
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;
        }else{
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }
}
