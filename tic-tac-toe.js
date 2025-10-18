
//Meshicka Brown

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const newGameBtn = document.querySelector('.btn'); 

    let currentPlayer = 'X';

    // Exercise 1: Layout the board
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
    }

    const squares = document.querySelectorAll('#board .square');

    // Exercise 3: Hover effect
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            if (!square.textContent) square.classList.add('hover');
        });
        square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
        });
    });

    // Function to check winner (Exercise 4)
    function checkWinner() {
        const winCombos = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        for (let combo of winCombos) {
            const [a,b,c] = combo;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                status.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
                status.classList.add('you-won');
                return true;
            }
        }
        return false;
    }

    // Exercise 2 & 4: Click to add X or O and check winner
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (!square.textContent && !checkWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });


 // Exercise 5: New Game button
    newGameBtn.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');
        currentPlayer = 'X';
    });
});
