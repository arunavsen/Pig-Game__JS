var roundScore, activePlayer, scores;

// Calling Init function to initialize the game
init();

// Roll Event
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice-1');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score If the rolled number was NOT a 1
    if (dice !== 1) {
        // Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        newPlayer();
    }
});

// Hold event
document.querySelector('.btn-hold').addEventListener('click', function () {

    // 1. Add Current Score to Global Score
    scores[activePlayer] += roundScore;

    // 2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // 3. Check if the player won the game
    if (scores[activePlayer] >= 50) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER !';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        // 4. New Player
        newPlayer();
    }
});


// New Game Event
document.querySelector('.btn-new').addEventListener('click',init);

function newPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-1').style.display = 'none';
}


// Our Initial Function
function init() {
    roundScore = 0;
    activePlayer = 0;
    scores = [0, 0]

    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
}