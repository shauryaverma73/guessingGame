let score = 20;
let highScore = 0;
let randomNumber = Math.floor(Math.random() * 20) + 1;
// console.log(randomNumber);

//check button
document.querySelector('.check').addEventListener('click', function () {
    const userValue = document.querySelector('.guess').value;
    // console.log(userValue);
    checkNumber(userValue);
});


//again button
document.querySelector('.again').addEventListener('click', function () {
    //question mark 
    // input field zero
    // string update
    // score = 20
    // same highscore
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '' ;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
});

const checkNumber = (val) => {

    if (val == '') {
        displayMessage('⛔ Enter Correct Number');
    }
    else if (val == randomNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = randomNumber;
        if (highScore == 0) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } else {
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        // score remain same
        // toggle bg
        //update highscore if current is high
        //print status winner
    }
    else if (val < randomNumber) {
        if (score > 1) {
            displayMessage('📉 Too Low');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('⛔ Game Over ⛔');
            document.querySelector('.score').textContent = 0;
        }
        // score-1
    }
    else if (val > randomNumber) {
        displayMessage('📈 Too High');
        score = score - 1;
        document.querySelector('.score').textContent = score;
        // print high
        // score-1
    }
};

const displayMessage = (message)=>{
    document.querySelector('.message').textContent = message;
};