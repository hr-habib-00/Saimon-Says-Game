let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["red", "green", "blue", "yellow"];
let gameseq = [];
let userseq = [];

//Starting The Game
document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        document.querySelector('body').style.backgroundColor = "rgb(85, 85, 85)";

        levelUp();
    }
});


function levelUp() {
    //making user input empty
    userseq = [];
    //Laveling Up
    level++;
    h2.innerText = `Level ${level}`;

    //Selecting A Random Button to Flash
    let ranIdx = Math.floor(Math.random() * 3);
    let ranClr = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranClr}`);

    //Pushhing Random color
    gameseq.push(ranClr);
    console.log(gameseq)

    btnFlash(ranbtn);
}

//Making The Random Button Flash
function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 300)
}

//Flash when Pressed a Button
function btnPress() {
    let btn = this;
    btnFlash(btn);

    //Pusshing the pressed color
    userPress = btn.getAttribute('id');
    console.log(userPress);
    userseq.push(userPress);

    checkAns(userseq.length - 1);
}

//selecting which button is pressed
let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener('click', btnPress);
}

//Matching Game Sequence And User Sequence
function checkAns(idx) {
    if (gameseq[idx] == userseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerText = `Game Over!! Your Score is ${level} \nPress any key to Start again`;
        document.querySelector('body').style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "rgb(85, 85, 85)";
        }, 500)
        reset();
    }
}

//Reseting The Game
function reset() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}