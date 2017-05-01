import React from 'react';
import GameLink from './game-link';
import Instructions from './instructions';
import GameHeader from './game-header';
import GameBody from './game-body';
import GameFooter from './game-footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //going to need to save all game state here
    this.state = {
      showInstructions: false,
      correctNumber: this.generateCorrect(),
      currentGuess: '',
      prevGuesses: [],
      feedback: 'Guess a Number!'
    }

    this.toggleInstructions = this.toggleInstructions.bind(this);
    this.setGuess = this.setGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  //need to have method for switching between main screen and instructions
  toggleInstructions() {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  }

  //need methods for updating and resetting app state
  //generate the correctNumber
  generateCorrect() {
    return Math.floor(Math.random() * 100 + 1);
  }

  setGuess(guess) {
    if(this.state.feedback === 'Correct!') {
      this.resetGame();
    } else {
      this.setState({
        currentGuess: guess
      });
      this.generateFeedback(guess);
    }
  }

  //generate response based on user's guess
  generateFeedback(num) {
    //using double equals so type of input can be string
    if(num === this.state.correctNumber) {
      this.setState({
        feedback: 'Correct!'
      });
      //put reset function here
      // this.resetGame();
    } else if(Math.abs(this.state.correctNumber - num) > 10) {
      this.addPrevGuess(num);
      this.setState({
        feedback: 'cold'
      });
    } else {
      this.addPrevGuess(num);
      this.setState({
        feedback: 'Hot!'
      });
    }
  }

  //keep track of previous guesses
  addPrevGuess(num) {
    this.setState({
      prevGuesses: [...this.state.prevGuesses, num]
    });
  }

  resetGame() {
    this.setState({
      correctNumber: this.generateCorrect(),
      currentGuess: '',
      prevGuesses: [],
      feedback: 'Guess a Number!'
    });
  }

  render() {
    const showInstructions = this.state.showInstructions;
    if(showInstructions) {
      return <Instructions onClick={this.toggleInstructions}/>
    }

    return (
      <div className="app-container">
        <GameLink classes="game-link" text="What?"
        onClick={this.toggleInstructions} />
        <GameLink classes="right game-link" text="New Game?"
        onClick={this.resetGame} />
        <h1 className="game-title">HOT or COLD</h1>
        <div className="game">
          <GameHeader feedback={this.state.feedback} />
          <GameBody
          guessCount={this.state.prevGuesses.length}
          onGuess={this.setGuess}
          />
          <GameFooter guesses={this.state.prevGuesses}/>
        </div>
      </div>
    );
  }
}//end of component
