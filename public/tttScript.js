/**
 * DECLARE GLOBAL VARIABLES FOR USE IN THE PROGRAM
 * - The board and its size
 */
let board, boardSize;





/**
 * SETUP FUNCTION RUNS ONCE WHEN WEBPAGE OPENS
 * - Initialise global variables
 */
function setup() {

    // Initialise board size
    boardSize = 3;

    // Create the board
    board = new Board(boardSize);

}