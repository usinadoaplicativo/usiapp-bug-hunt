import React, { Component } from 'react';
import './AppChallenge.css';
import ChallengeInstructions from '../ChallengeInstructions/ChallengeInstructions';

export default class AppChallenge extends Component {
  render() {
    return (
        <div className="AppChallenge">
            <h2>Challenge {this.props.index}: {this.props.title}</h2>
            <ChallengeInstructions index={this.props.index}/>

            <div className="ChallengeContainer">
                {this.props.render()}
            </div>
        </div>
    );
  }
}