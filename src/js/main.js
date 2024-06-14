
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function removeSelection(){
  const selectedCard = document.querySelector(".selected");
  selectedCard.classList.remove("selected");
}

function selectCard(currentCard){
  cards[currentCard].classList.add("selected");
}

function nextCard(){
  if(currentCard === cards.length - 1){
    currentCard = -1;
  }

  removeSelection();
  selectCard(++currentCard); // currentCard += 1
}

function previousCard(){
  if(currentCard === 0){
    currentCard = cards.length;
  }

  removeSelection();
  selectCard(--currentCard); // currentCard -= 1
}

nextBtn.addEventListener("click", () => {
  nextCard();
});

prevBtn.addEventListener("click", () => {
  previousCard();
});

document.addEventListener("keyup", event => {
  if(event.key === "ArrowRight"){
    nextCard();
  
  } else if(event.key === "ArrowLeft"){
    previousCard();
  }
});
