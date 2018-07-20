import React, { Component } from 'react';
import './css/App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Derp from "./Derp";
import JumpGraphs from "./JumpGraphs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Shut Up & Log</h1>
        </header>


          <HashRouter>
            <div>
            <ul className="header">
              <li><NavLink to="/derp">Derp</NavLink></li>
              <li><NavLink to="/jumpGraphs">Jumps</NavLink></li>
            </ul>

            <div className="content">
              <Route path="/derp" component={Derp}/>
              <Route path="/jumpGraphs" component={JumpGraphs}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
