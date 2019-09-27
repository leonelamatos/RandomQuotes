import React, { Component } from 'react';
import QuoteBox from './Components/quoteBox'
import './Css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1080px', marginTop: '240px'}}>
        <QuoteBox/>
      </div>
    );
  }
}

export default App;
