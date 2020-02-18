
                 
const INPUT_THML = document.querySelector("#input");
const OUTPUT = document.querySelector("#card");
const ADD = document.querySelector("#add");
const ListArray = [];

//Enter 
document.addEventListener('keyup', event => {
    if (event.code === "Enter") {
        const getValueInput = INPUT_THML.value;
        if (getValueInput != "") {
            addList(getValueInput);
            clear();
            pickColor();
        }
    }
});

//random color
function pickColor() { 
    const colorsList = ["#7b1fa2", "#1e88e5", "#c2185b", "#00897b", "#039be5", "#ffd0a8"];
    var random_color = colorsList[Math.floor(Math.random() * colorsList.length)];
    document.body.style.background = random_color;
}   

//add
ADD.addEventListener('click', () => {
    const add = INPUT_THML.value;
    if (add != "") {
        addList(add);
        clear();
        pickColor();
    }
});

//input 
function addList(listName) {
    ListArray.push({ name: listName });
    updateList();
}
//update of values
function updateList() {
    
    var output = "";
    for (let item of ListArray) {
        output += `
            <div class="col-3">
                <h2>${item.name}</h2>
                <button id="btn">card</button>
            </div>`;
        OUTPUT.innerHTML = output;
    }
}

//clear input
function clear() {
    INPUT_THML.value = "";
}

//random of color


