import React, { Component } from 'react';
import './TransactionList.css';

export default class TransactionList extends Component {
  /**
   * Props:
   *   transactions: Array<{merchant: string, amount: number}>
   */
  render() {
    const trans = this.props.transactions;

    return (
        <div className="TransactionList">
          {trans.map((transaction)=> (
           <div className="Transaction">
            <span>{transaction.merchant}</span>
            <span style={{position: 'absolute', left:'85%'}}>$</span>
            <span>{transaction.amount}</span>
          </div>
          ))}
       </div>
        
    );
  }
}