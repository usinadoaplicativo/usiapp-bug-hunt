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
      difference: undefined,
      Houve1Tentativa: false,
    };
  }

  render() {
    return (
        <div className="WhatsTheNumber">
            { this.state.difference < 0 && this.state.Houve1Tentativa === true ? <p className="Wrong">The number is lower</p> : null }
            { this.state.difference > 0 && this.state.Houve1Tentativa === true ? <p className="Wrong">The number is higher</p> : null }
            { this.state.difference === 0 && this.state.Houve1Tentativa === true ? <p className="Correct">You guessed the number! It Was {this.state.targetNumber}.</p> : null }            
            
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
      currentGuess: ''
    });
    this.state.Houve1Tentativa = false
  }

  submitGuess = () => {
    if (Number.isNaN(this.state.currentGuess)) {
      this.setState({
        showError: true,
        currentGuess: ''
      })}
      this.setState({
        currentGuess: '',
        Houve1Tentativa: true
      })
      
    

    this.setState({
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

    event.target.value = '';
    
    if (Number.isNaN(value)) {
      return;
    }

    this.setState({
      currentGuess: value
    });
  }
}