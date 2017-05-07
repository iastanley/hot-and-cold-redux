import React from 'react';
import {connect} from 'react-redux';

import GameLink from './game-link';
import Instructions from './instructions';
import GameHeader from './game-header';
import GameBody from './game-body';
import GameFooter from './game-footer';

import {toggleInstructions, setGuess, resetGame} from '../actions';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleInstructions = this.toggleInstructions.bind(this);
    this.setGuess = this.setGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  //need to have method for switching between main screen and instructions
  toggleInstructions() {
    this.props.dispatch(toggleInstructions());
  }

  setGuess(guess) {
    if (this.props.feedback === 'Correct!') {
      this.props.dispatch(resetGame());
    } else {
      this.props.dispatch(setGuess(guess));
    }
  }

  resetGame() {
    this.props.dispatch(resetGame());
  }

  render() {
    const showInstructions = this.props.showInstructions;
    if(showInstructions) {
      return <Instructions onClick={this.toggleInstructions}/>
    }

    return (
      <div className="app-container">
        <GameLink classes="left game-link" text="What?"
        onClick={this.toggleInstructions} />
        <GameLink classes="right game-link" text="New Game"
        onClick={this.resetGame} />
        <h1 className="game-title">HOT or COLD</h1>
        <div className="game">
          <GameHeader feedback={this.props.feedback} />
          <GameBody
          guessCount={this.props.guessList.length}
          onGuess={this.setGuess}
          />
          <GameFooter guesses={this.props.guessList}/>
        </div>
      </div>
    );
  }
}//end of component

const mapStateToProps = state => ({
  showInstructions: state.showInstructions,
  guessList: state.guessList,
  feedback: state.feedback
});

export default connect(mapStateToProps)(App);
