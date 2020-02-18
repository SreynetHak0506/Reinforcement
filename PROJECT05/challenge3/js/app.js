const cards = document.querySelectorAll('.memory-card');
cards.forEach(element => {
  element.addEventListener('click', flipCard);
});

let firstCard = null;
let secondCard = null;
let hasFlipedCard = false;
function flipCard() {
  this.classList.add('flip');
  if(!hasFlipedCard){
    hasFlipedCard = true;
    firstCard = this;
    this.onclick = null;
  }else{
    hasFlipedCard = false;
    secondCard = this;
    //is match
    checkMatch();
}
function checkMatch(){
  let isMatchCard = firstCard.dataset.framework === secondCard.dataset.framework;
  if( isMatchCard){
    removeEventListenerCard();
  }else{
    unFlipCard();
  }
  // ismatchCard? removeEventFromCard() : unFlipCard();
}
function unFlipCard(){
    // remove when click defforent click
    const TIME_FLIP = 1500;
    setTimeout( () => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

    },TIME_FLIP); 
}
}
function removeEventListenerCard(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}
(function shuffle(){
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * 12);
    card.style.order = randomCard;
  });
})();
