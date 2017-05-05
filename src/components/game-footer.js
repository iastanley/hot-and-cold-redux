import React from 'react';

export default function GameFooter(props) {
  //build array of guesses from props.guesses from Game component
  const guesses = props.guesses.map((guess, index) => {
    return <div key={index} className="guess">{guess}</div>
  });
  return (
    <div className="game-footer">
      {guesses}
    </div>
  );
}
