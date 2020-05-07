
const size = 3; //board size

var XSelected = [];
var OSelected = [];

var token = []; //for checking winner

var x_count = 0;
var o_count = 0;
var turn = 1;

var endGame = false; //stop playing

// winning combinations
var winners = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]; 

// Play!
function play() {
    document.getElementById('board').addEventListener('click', (event) => {
        if (!endGame) {
            if (turn == 1) {
                event.target.innerHTML = 'X'; // write player X selection on the board
                x_count += 1;
                XSelected.push(parseInt(event.target.id)); // add selected cell's id to array of selections by X
                if (x_count >= size) { checkWin() };
                turn = 0;
            } else {
                event.target.innerHTML = 'O';  // write player O selection on the board
                o_count += 1;
                OSelected.push(parseInt(event.target.id)); // add selected cell's id to array of selections by O
                if (o_count >= size) { checkWin() };
                turn = 1;
            }
        }
    });
}

// Play Again
function playAgain() {
    location.reload();
}

// Check for winner
function checkWin() {
    token = (turn == 1) ? XSelected : OSelected;
    for (let i = 0; i < winners.length; i++) {
        if (token.includes(winners[i][0]) && token.includes(winners[i][1]) && token.includes(winners[i][2])) {
            if (token == XSelected) {
                document.getElementById('message').innerHTML = 'X Wins!';
                endGame = true;
            }
            else {
                document.getElementById('message').innerHTML = 'O Wins!';
                endGame = true;
            };
        }
        else {
            //draw - nobody win
            if (XSelected.length + OSelected.length == 9) {
                document.getElementById('message').innerHTML = 'Nobody Wins. Play Again.';
            }
        }
    }
}

setTimeout(() => {
    play();
}, 1500);

