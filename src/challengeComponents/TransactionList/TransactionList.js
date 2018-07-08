import React, { Component } from 'react';
import './TransactionList.css';

export default class TransactionList extends Component {
  /**
   * Props:
   *   transactions: Array<{merchant: string, amount: number}>
   */
  render() {
    return (
        <div className="TransactionList">
            <div className="Transaction">
              <span>{this.props.transactions[0].merchant}</span>
              <span>${this.props.transactions[0].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[1].merchant}</span>
              <span>${this.props.transactions[1].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[2].merchant}</span>
              <span>${this.props.transactions[2].amount}</span>
            </div>
        </div>
    );
  }
}