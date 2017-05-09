//you need to import the helper function and initialState???
import {hotAndColdReducer, generateCorrect, initialState} from './index';
import {toggleInstructions, setGuess, resetGame, feedbackOptions} from '../actions';

describe('hotAndColdReducer', () => {
  //set initial dummy state
  const correctNumber = 50;
  const testGuess = 10;
  const coldGuess = correctNumber - 15;
  const warmGuess = correctNumber - 9;
  const hotGuess = correctNumber - 4;

  //you might consider creating multiple state objects
  const testState = {
    showInstructions: false,
    correctNumber: correctNumber,
    currentGuess: testGuess,
    guessList: [1,2,3],
    feedback: feedbackOptions.cold
  }

  //test toggleInstructions with a false state
  it('should toggle showInstructions on toggleInstructions action', () => {
    const newState = hotAndColdReducer(testState, toggleInstructions());
    expect(newState.showInstructions).toBe(true);
  })

  //test resetGame with any state
  it('should reset game on resetGame action', () => {
    const newState = hotAndColdReducer(testState, resetGame());
    // expect(newState).toEqual(initialState);
    expect(typeof newState.correctNumber).toBe('number');
    expect(newState.currentGuess).toBe('');
    expect(newState.showInstructions).toBe(false);
    expect(newState.feedback).toBe(feedbackOptions.start);
    expect(newState.guessList).toHaveLength(0);
  });

  //test setGuess with invalid input
  it('should handle invalid guess on setGuess', () => {
    const invalidGuess = 'not a number';
    const newState = hotAndColdReducer(testState, setGuess(invalidGuess));
    expect(newState.feedback).toBe(feedbackOptions.notValid);
    expect(newState.guessList).toHaveLength(3);
    expect(newState.currentGuess).toBe(testGuess);
  });

  it('should handle out of range guess on setGuess', () => {
    const invalidGuess = 500;
    const newState = hotAndColdReducer(testState, setGuess(invalidGuess));
    expect(newState.feedback).toBe(feedbackOptions.outOfRange);
    expect(newState.guessList).toHaveLength(3);
    expect(newState.currentGuess).toBe(testGuess);
  });

  //test setGuess with coldGuess
  it('should handle cold guess on setGuess', () => {
    const newState = hotAndColdReducer(testState, setGuess(coldGuess));
    expect(newState.feedback).toBe(feedbackOptions.cold);
    expect(newState.currentGuess).toBe(coldGuess);
    expect(newState.guessList).toHaveLength(4);
    expect(newState.guessList[newState.guessList.length-1]).toBe(coldGuess);
  });

  //test setGuess with warmGuess
  it('should handle warm guess on setGuess', () => {
    const newState = hotAndColdReducer(testState, setGuess(warmGuess));
    expect(newState.feedback).toBe(feedbackOptions.warm);
    expect(newState.currentGuess).toBe(warmGuess);
    expect(newState.guessList).toHaveLength(4);
    expect(newState.guessList[newState.guessList.length-1]).toBe(warmGuess);
  });

  //test setGuess with hotGuess
  it('should handle hot guess on setGuess', () => {
    const newState = hotAndColdReducer(testState, setGuess(hotGuess));
    expect(newState.feedback).toBe(feedbackOptions.hot);
    expect(newState.currentGuess).toBe(hotGuess);
    expect(newState.guessList).toHaveLength(4);
    expect(newState.guessList[newState.guessList.length-1]).toBe(hotGuess);
  });

  //test setGuess with correct Guess
  it('should handle hot guess on setGuess', () => {
    const newState = hotAndColdReducer(testState, setGuess(correctNumber));
    expect(newState.feedback).toBe(feedbackOptions.correct);
    expect(newState.currentGuess).toBe(testState.currentGuess);
    expect(newState.guessList).toHaveLength(3);
  });

});
