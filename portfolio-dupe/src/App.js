import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='box'>
        <Header />
        <div className='titles'>
        <h1>Welcome to Our Studio</h1>
        <h2>It's Nice To Meet You</h2>
        <button className='morebtn'>Tell Me More</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
