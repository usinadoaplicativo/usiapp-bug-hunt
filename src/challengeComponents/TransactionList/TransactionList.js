import React, { Component } from 'react';
import './TransactionList.css';

export default class TransactionList extends Component {
  /**
   * Props:
   *   transactions: Array<{merchant: string, amount: number}>
   */
  render() {
    

    return (

      this.props.transactions.map(function(item){
        return <div className="Transaction">
          <span className="">{item.merchant}</span>
          <span className="Amount">{item.amount}</span>
        </div>
      }))
  
    
  }
}