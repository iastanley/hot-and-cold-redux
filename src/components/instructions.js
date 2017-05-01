import React from 'react';

export default function Instructions(props) {
  return (
    <div className="instructions">
      <h1>How to Play</h1>
      <p>
        Guess a number between 1 and 100. If your guess is bad you will see cold. If the guess is close you will see Hot! See how many guesses you need to get the correct number! Click New Game to start over
      </p>
      <button onClick={props.onClick}>OK</button>
    </div>
  );
}
