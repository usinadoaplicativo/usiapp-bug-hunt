import React, { Component } from 'react';
import './WhatsTheNumber.css';

function getRandomInt() {
  return Math.floor(Math.random() * 9) + 1;
}

export default class WhatsTheNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: '',
      targetNumber: getRandomInt(),
      showError: false,
      difference: undefined
    };
  }

  render() {
    return (
        <div className="WhatsTheNumber">
            { this.state.difference < 0 ? <p className="Wrong">The number is lower</p> : null }
            { this.state.difference > 0 ? <p className="Wrong">The number is higher</p> : null }
            { this.state.difference === 0 ? <p className="Correct">You guessed the number, that was {this.state.targetNumber} !</p> : null }

            <div className="GuessInput">
              <label>Guess:</label>
              <input value={this.state.currentGuess} onChange={this.handleInputChange}/>
            </div>

            { this.state.showError ? <p className="Error">The guess must be an integer</p> : null }

            <button onClick={this.submitGuess}>Submit Guess</button>
            <button onClick={this.resetGame}>Reset Game</button>
        </div>
    );
  }

  resetGame = () => {
    this.setState({
      targetNumber: getRandomInt(),
      difference: undefined
    });
  }

  submitGuess = () => {
    if (Number.isNaN(this.state.currentGuess)) {
      this.setState({
        showError: true,
        currentGuess: ''
      });
      return;
    }

    this.setState({
      currentGuess: '',
      showError: false,
      difference: this.state.targetNumber - this.state.currentGuess
    });
  }

  handleInputChange = (event) => {

    if (!event.target.value) {
      this.setState({
        currentGuess: ''
      });
      return;
    }
  
    let value = Number.parseInt(event.target.value);
    
    if (Number.isNaN(value)) {
      return;
    }

    this.setState({
      currentGuess: value
    });
  }
}