import { useState, Component } from 'react';
import './App.css';
import Header from './misc/header';
import { Prompt } from './interfaces/Modal';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
    }
  }

  render() {
    return (
      <div>
        <Header />
        
      </div>
    )
  }
}

export default App;
