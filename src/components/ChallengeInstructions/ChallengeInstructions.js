import React, { Component } from 'react';
import DesiredInput from '../../AmountInput.png';
import './ChallengeInstructions.css';

export default class ChallengeInstructions extends Component {
  render() {

    let instructions;
    switch (this.props.index) {
      case 1:
        instructions = (
          <ol>
            <li>The TransactionList is passed a prop called "transactions" which contains a number of items. At the moment we are only rendering 3 of these transactions. Please render them all vertically.</li>
            <li>Please align all the dollar signs to be in line with each other.</li>
          </ol>
        );
        break;
      case 2:
        instructions = (
          <ol>
            <li>By only editing the code in AmountInput.css please style the AmountInput component to look as close to this as possible:</li>
            <img src={DesiredInput} width="230"/>
          </ol>
        );
        break;
      case 3:
        instructions = (
          <ol>
            <li>There is a guess the number game below. It looks like our submit and reset buttons are broken, please fix them.</li>
            <li>For some reason, when we guess the correct number, the game reports that we have both won the game and guessed too low, please investigate and fix this behaviour.</li>
            <li>Please make sure that the input clears whenever a guess is submitted or the game is reset.</li>
            <li>Now that the input is cleared, we don't know what the winning number was when we win the game. Please include it in the winning message.</li>
          </ol>
        );
        break;
      default:
        instructions = null;
    }

    return (
        <div className="ChallengeInstructions">
            {instructions}
        </div>
    );
  }
}