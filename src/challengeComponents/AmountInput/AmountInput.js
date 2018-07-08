import React, { Component } from 'react';
import './AmountInput.css';

export default class AmountInput extends Component {
  render() {
    return (
        <div className="AmountInput">
            <div className="DollarContainer">
              <span>$</span>
            </div>
            <input type="text"/>
        </div>
    );
  }
}