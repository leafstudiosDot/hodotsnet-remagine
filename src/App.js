import { Component } from 'react';
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
      showPrompt: true,
    }
  }

  render() {
    return (
      <div>
        <Header />
          <Prompt
          title={`Are you sure?`}
          desc={`This will lose all of your data`}
          acceptText={`Yes`}
          rejectText={`No`}
          reject={() => this.setState({enabled: false})}
          enabled={this.state.enabled} />
      </div>
    )
  }
}

export default App;
