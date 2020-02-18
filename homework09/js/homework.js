const INPUT_HTML= document.querySelector("#input");
const BUTTON_HTML =document.querySelector("#add");
const CARD_HTML = document.querySelector("#column");



let allCards =[];
BUTTON_HTML.addEventListener('click', () => {
    const inputValue = INPUT_HTML.value;
    if(inputValue !=""){
        addCardToList(inputValue);
    }   
    clearInput() ;
    randomColor() ;
})

document.addEventListener('keyup', event => {
    if(event.code === "Enter"){
        const inputValue = INPUT_HTML.value;
        if(inputValue !=""){
            addCardToList(inputValue);
        }   
        clearInput() ;
        randomColor() ;
    }
})

//input values
function addCardToList(listCard){
    allCards.push({
        name:listCard
    });
    updateCard();

}

function updateCard(){
    let card ="";
    for(let item of allCards){
            card +=`
                <div class="column">
                 <div class="card">
                   <h1>${item.name}</h1>
                   <button id="btnCard">card</button>
                 </div>
               </div>
            `;
        }
        CARD_HTML.innerHTML= card;    
}

function clearInput(){
    INPUT_HTML.value ="";
}

//randomly color
function randomColor() {
    const colorsList = ["#7b1fa2", "#1e88e5", "#c2185b", "#00897b", "#039be5", "#ffd0a8"];
    var random_color = colorsList[Math.floor(Math.random() * colorsList.length)];
    document.body.style.background = random_color;
}   
