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
          {this.props.transactions.map((transactions)=>(
            <div className="Transaction">
              <span>{transactions.merchant}</span>
              <span className="Amount">${transactions.amount}</span>
            </div>
          ))}
        </div>
    );
  }
}