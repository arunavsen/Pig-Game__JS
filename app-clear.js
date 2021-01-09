var roundScore = 0;
var activePlayer = 0;

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'



document.querySelector('.dice-1').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1. Random number
    var dice = Math.floor(Math.random()*6)+1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice-1');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';

    // 3. Update the round score If the rolled number was NOT a 1
    if(dice !== 1){
        // Add Score
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;
    }else{
        //Next player
        activePlayer === 0?activePlayer=1:activePlayer=0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        var uiu = document.querySelector('player-1-panel').classList.toggle('active')
        
    }

});