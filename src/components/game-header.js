import React from 'react';

//stateless component
//props.feedback will be provided by App component
export default function GameHeader(props) {
  return (
    <div className="game-header">
      <p>{props.feedback}</p>
    </div>
  );
}
