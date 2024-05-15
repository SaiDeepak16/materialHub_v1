const container = document.getElementById('card-container');
container.addEventListener('scroll', function(event) {
    console.log(event.target.scrollLeft);
});

function activateCard(list) {
    var cards = document.querySelectorAll('.list');
    for (var i = 0; i < cards.length; i++) {
        if (cards[i] === list) {
            cards[i].classList.toggle('active');
        } else {
            cards[i].classList.remove('active');
        }
    }
}
