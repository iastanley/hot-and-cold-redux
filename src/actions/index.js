//toggle Instructions
export const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS';
export const toggleInstructions = () => ({
  type: TOGGLE_INSTRUCTIONS
});

//set guess actions
export const SET_GUESS = 'SET_GUESS';
export const setGuess = (guess) => ({
  type: SET_GUESS,
  guess
});

//reset game action
export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});
