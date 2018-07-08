import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import AppChallenge from './components/AppChallenge/AppChallenge';
import TransactionList from './challengeComponents/TransactionList/TransactionList';
import AmountInput from './challengeComponents/AmountInput/AmountInput';
import WhatsTheNumber from './challengeComponents/WhatsTheNumber/WhatsTheNumber';

// TODO: Add created with moment offsets 
const TRANSACTIONS = [
  { merchant: 'Netflix', amount: 19 },
  { merchant: 'AWS', amount: 211 },
  { merchant: 'Ebay', amount: 25 },
  { merchant: 'Woolworths', amount: 22 },
  { merchant: 'Woolworths', amount: 4.50 },
  { merchant: 'Google Play', amount: 12.75 },
  { merchant: 'Netflix', amount: 19 },
  { merchant: 'Github', amount: 7 },
  { merchant: 'Opal Travel', amount: 4.90 },
  { merchant: 'Opal Travel', amount: 5.10 },
  { merchant: 'AWS', amount: 250 },
  { merchant: 'Netflix', amount: 19 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the DiviPay Bug Hunt</h1>
        </header>
        <p className="App-intro">
          Below we have 3 components we would like you to fix. The only code you will need to edit is found in divipay-bug-hunt/src/challengeComponents/.
        </p>

        <div className="App-challenges">
          <AppChallenge index={1} title={"TransactionList"} render={() => <TransactionList transactions={TRANSACTIONS}/>}/>
          <AppChallenge index={2} title={"AmountInput"} render={() => <AmountInput/>}/>
          <AppChallenge index={3} title={"WhatsTheNumber"} render={() => <WhatsTheNumber/>}/>
        </div>
      </div>
    );
  }
}

export default App;
