import React from 'react';

export default function GameLink(props) {
  return (
    <a href="#" className={props.classes}
    onClick={props.onClick}>
      {props.text}
    </a>
  );
}
