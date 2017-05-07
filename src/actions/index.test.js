import {TOGGLE_INSTRUCTIONS,
        toggleInstructions,
        SET_GUESS,
        setGuess,
        RESET_GAME,
        resetGame} from './index.js';

describe('toggleInstructions', () => {
  it('should create action', () => {
    const action = toggleInstructions();
    expect(action.type).toBe('TOGGLE_INSTRUCTIONS');
  });
});

describe('setGuess', () => {
  it('should create action', () => {
    const guess = '50';
    const action = setGuess(guess);
    expect(action.type).toBe('SET_GUESS');
    expect(action.guess).toBe(guess);
  });
});

describe('resetGame', () => {
  it('should create action', () => {
    const action = resetGame();
    expect(action.type).toBe('RESET_GAME');
  });
});
