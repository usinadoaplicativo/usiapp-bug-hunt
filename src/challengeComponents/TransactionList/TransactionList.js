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
            <div className="Transaction">
              <span>{this.props.transactions[3].merchant}</span>
              <span>${this.props.transactions[3].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[4].merchant}</span>
              <span>${this.props.transactions[4].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[5].merchant}</span>
              <span>${this.props.transactions[5].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[6].merchant}</span>
              <span>${this.props.transactions[6].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[7].merchant}</span>
              <span>${this.props.transactions[7].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[8].merchant}</span>
              <span>${this.props.transactions[8].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[9].merchant}</span>
              <span>${this.props.transactions[9].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[10].merchant}</span>
              <span>${this.props.transactions[10].amount}</span>
            </div>
            <div className="Transaction">
              <span>{this.props.transactions[11].merchant}</span>
              <span>${this.props.transactions[11].amount}</span>
            </div>
        </div>
    );
  }
}
