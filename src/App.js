import { Component } from 'react';
import './App.css';
import Header from './misc/header/header';
import Footer from './misc/footer/footer';
import { Prompt } from './interfaces/Modal';

function App() {
  return (
    <div className="App">
      <Home />
      <Footer/>
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
          desc={`A second level interface for hodots., You can come back here anytime.`}
          acceptText={`Explore Remagine`}
          rejectText={`Take me back to the Classic`}
          accept={() => this.setState({enabled: false})}
          reject={() => this.setState({enabled: true})}
          enabled={this.state.enabled} />
      </div>
    )
  }
}

export default App;
