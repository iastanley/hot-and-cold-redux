import {TOGGLE_INSTRUCTIONS, SET_GUESS, RESET_GAME}
from '../actions';

export function generateCorrect() {
  return Math.floor(Math.random() * 100 + 1);
}

export const initialState = {
  showInstructions: false,
  correctNumber: generateCorrect(),
  currentGuess: '',
  guessList: [],
  feedback: 'Guess a Number!'
}

export const hotAndColdReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_INSTRUCTIONS) {
    //setInstructions
    return Object.assign({}, state, {
      showInstructions: !state.showInstructions
    });
  } else if (action.type === SET_GUESS) {
    //NOTE - you might be able to break these up into separate actions
    const guessNum = Number(action.guess);
    if(isNaN(guessNum)) {
      return Object.assign({}, state, {
        feedback: 'Not a valid input!'
      });
    } else if (guessNum > 100 || guessNum <= 0) {
      return Object.assign({}, state, {
        feedback: 'Number not between 1 and 100'
      });
    } else if (guessNum === state.correctNumber) {
      return Object.assign({}, state, {
        feedback: 'Correct!'
      });
    } else if (Math.abs(state.correctNumber - guessNum) > 10) {
      return Object.assign({}, state, {
        currentGuess: guessNum,
        guessList: [...state.guessList, guessNum],
        feedback: 'cold'
      });
    } else if (Math.abs(state.correctNumber - guessNum) > 5) {
      return Object.assign({}, state, {
        currentGuess: guessNum,
        guessList: [...state.guessList, guessNum],
        feedback: 'Warm'
      });
    } else {
      return Object.assign({}, state, {
        currentGuess: guessNum,
        guessList: [...state.guessList, guessNum],
        feedback: 'Hot!'
      });
    }
  } else if (action.type === RESET_GAME) {
    //force to make copy
    return Object.assign({}, initialState);
  } else {
    return state;
  }
};
