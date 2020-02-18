const SEARCH = document.querySelector('#search');
const ADD_VALUE = document.querySelector('#sort');
const CLICK = document.querySelector('#add-btn');
const OUTPUT = document.querySelector('ul');
//Enter
const listAll = [];
ADD_VALUE.addEventListener('keyup',event =>{
    if(event.code === "Enter"){
       const INPUT_VALUE = ADD_VALUE.value;
       if(INPUT_VALUE == ""){
           clear(INPUT_VALUE);
       }else{
        addDataList(INPUT_VALUE);
       }
    }
});

//click
CLICK.addEventListener('click',function(){
    const INPUT_VALUE = ADD_VALUE.value;
       if(INPUT_VALUE == ""){
           clear(INPUT_VALUE);
       }else{
        addDataList(INPUT_VALUE);
       }
});
// iput Clear 
function clear(){
    ADD_VALUE.value = "";
}

// out in HTML
function addDataList(List){
    const item =`
        <li>
            <p>${List}</p>
        </li>
    `;
    OUTPUT.insertAdjacentHTML('beforeend',item);
}

function filterItem(){
    const FILITER_NOT_FOUND = -1;
    const items = document.querySelectorAll('li');
    const filter = filterInput.value.toUpperCase()
    let text;
    for(let i = 0; i< items.length; i++){
     text = items[i].textContent || items[i].innerText;
     let isFilterMatch = text.toUpperCase().indexOf(filter) >FILITER_NOT_FOUND;
     if(isFilterMatch){
         items[i].style.display = "block";
     }else{
         items[i].style.display = "none";
     }

    }
}
document.addEventListener('keyup',filterItem);