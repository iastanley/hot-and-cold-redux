//actions

//toggle Instructions
const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS';
const toggleInstructions = () => ({
  type: TOGGLE_INSTRUCTIONS
});

//set guess actions
const SET_GUESS = 'SET_GUESS';
const setGuess = (guess) => ({
  type: SET_GUESS,
  guess
});

//not sure if I'll need this
// const SET_FEEDBACK = 'SET_FEEDBACK';
// const setFeedback = (guess) => ({
//   type:
// });

//reset game action
const RESET_GAME = 'RESET_GAME';
const resetGame = () => ({
  type: RESET_GAME
});

//add to prevGuesses list
const ADD_TO_GUESSLIST = 'ADD_TO_GUESSLIST';
const addToGuessList = (guessNum) => ({
  type: ADD_TO_GUESSLIST,
  guessNum
});
