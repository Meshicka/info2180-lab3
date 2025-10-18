document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X"; // X starts

    squares.forEach(square => {
        square.classList.add("square");

        square.addEventListener("click", function() {
            // Only allow empty squares to be clicked
            if (square.textContent === "") {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Switch player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});

