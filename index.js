const cards = document.querySelectorAll('.card');

var firstCard;
var secondCard;

cards.forEach(card => card.addEventListener("click", flip));

function flip() {
    if (!firstCard) {
        this.classList.add("flip");
        firstCard = this;
        firstCard.removeEventListener("click", flip);
        setTimeout(() => {
            firstCard.classList.remove("flip");
        }, 300);
    } else if (!secondCard) {
        this.classList.add("flip");
        secondCard = this;
        checkMatch();
    }
}

function checkMatch() {
    console.log("Checking...");
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        failed();
    }
}

function success() {
    firstCard.classList.add("flip");
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

function failed() {
    firstCard.addEventListener("click", flip);
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 300);
}

function reset() {
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 20);
        card.style.order = index;
    });
})();