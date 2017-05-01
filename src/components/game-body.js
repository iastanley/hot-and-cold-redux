import React from 'react';

export default class GameBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }//end of constructor

  handleChange(event) {
    this.setState({input: Number(event.target.value.trim())});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (typeof this.state.input === 'number' && this.props.onGuess) {
      this.props.onGuess(this.state.input);
    }
    this.setState({input: ''});
  }

  render() {
    return (
      <div className="game-body">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Guess Here"
          value={this.state.input}
          onChange={this.handleChange}/>
          <button>Guess</button>
          <p>
            Guess #
            <span className="guess-count">
            {this.props.guessCount}
            </span>!
          </p>
        </form>
      </div>
    );
  }


}//end of component
