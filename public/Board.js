/**
 * CLASS STRUCTURE FOR A BOARD
 * - Given a size, default is 3
 * - Has a size, a 2D array of spots, current player
 * - Spots are: 0 = empty, 1 = O, -1 = X
 * - Can make a move into an empty space, swapping current player
 */
class Board {



    /**
     * OBJECT CONSTRUCTOR, GIVEN SIZE OF BOARD
     */
    constructor(n=3) {

        // Track the size
        this.size = n;

        // Make the spots array
        this.spots = [];
        for (let i = 0; i < n; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                row.push(0);
            }
            this.spots.push([...row])
        }

        // Indicate current player
        this.currentPlayer = 1;
        return;
    }



    /**
     * METHOD TO MAKE A MOVE, SWAPPING CURRENT PLAYER, GIVEN ROW AND COLUMN
     * Returns 1 if success
     * Returns 2 if NaN input(s)
     * Returns 3 if inputs out of range (0-n)
     * Returns 4 if spot is not empty
     */
    makeMove(row, column) {

        // Test that the arguments are numbers and not empty
        if (isNaN(row) || isNaN(column) || row == null || column == null) {
            console.error("Board.makeMove was not given numbers for row and/or column! Given: " + row + " and " + column);
            return 2;
        }

        // Test that the numbers are appropriate
        if (row >= this.size || column >= this.size || row < 0 || column < 0) {
            console.error("Board.makeMove was given numbers out of range! Given: " + row + " and " + column + " (size = " + this.size + ")");
            return 3;
        }

        // Check that the spot is empty
        if (this.spots[row][column] != 0) {
            console.error("Board.makeMove was given a filled spot! Given: " + row + " and " + column + " (" + this.spots[row][column] + ")");
            return 4;
        }

        // If a valid spot is given, mark it and swap current player
        this.spots[row][column] = this.currentPlayer;
        this.currentPlayer *= -1;
        return 1;
    }



}