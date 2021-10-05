import { Component } from 'react';
import './App.css';
import Header from './misc/header/header';
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
          title={`Meet hodots. Remagine`}
          desc={`hodots. Remagine is a second level interface for hodots.`}
          acceptText={`Explore Remagine`}
          rejectText={`Take me back to the Classic`}
          reject={() => this.setState({enabled: false})}
          enabled={this.state.enabled} />
      </div>
    )
  }
}

export default App;
