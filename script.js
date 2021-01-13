'use strict';
let result = Math.trunc(Math.random() * 19) + 1;
let yourScore = 20;
let highScore = 0;

let EnterNumber = document.querySelector('.guess');
document.querySelector('.check').addEventListener('click', function () {
    //if number we enter bigger than the result
    if (EnterNumber.value > result) {
        yourScore--;
        document.querySelector('.score').innerHTML = yourScore;
        document.querySelector('.message').innerHTML = 'too high'
    }
    //if number we enter smaller than the result
    else if (EnterNumber.value < result) {
        yourScore--;
        document.querySelector('.score').innerHTML = yourScore;
        document.querySelector('.message').innerHTML = 'too low'
    }
    //we win the game
    else {
        document.querySelector('.number').innerHTML = result
        document.querySelector('.message').innerHTML = 'you win';
        document.querySelector('body').style.background = 'red'
        if (yourScore > highScore) {
            highScore = yourScore;
            document.querySelector('.highscore').innerHTML = highScore
        }
    }
})
//when we click again
document.querySelector('.again').addEventListener('click', function () {
    yourScore = 20;
    result = Math.trunc(Math.random() * 19) + 1;
    console.log(result)
    document.querySelector('.score').innerHTML = yourScore;
    document.querySelector('body').style.background = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').innerHTML = 'Start guessing...'
    document.querySelector('.number').innerHTML = '?';


})
