import React, { Component } from 'react';
import './css/App.css';
import LastJump from './LastJump.js';
import Graphs from './Graphs.js';
import logo from './img/favicon.png'

class App extends Component {
  state = {
    lastJump: '',
    jumps: ''
  };


  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({
          lastJump: res.jumps[res.jumps.length-1],
          jumps: res.jumps
         })
      }).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/jumps');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo">
            <img className="Logo-Img" src={logo} alt="Colorbarf Logo here"/>
            <h1 className="App-title">Shut Up & Log</h1>
          </div>
        </header>

        <LastJump jump={this.state.lastJump}/>
        <Graphs jumps={this.state.jumps}/>
      </div>
    );
  }
}

export default App;
