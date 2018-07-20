import React, { Component } from 'react';
import './css/App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Colorbarf from "./Colorbarf";
import JumpGraphs from "./JumpGraphs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <header className="appTitleBar">
              <h1 className="appTitle">Shut Up & Log</h1>
          </header>

          <HashRouter>
            <div>
              <div className="menuBar">
                  <div className="menuItem"><NavLink exact to="/">Jumps</NavLink></div>
                  <div className="menuItem"><NavLink to="/colorbarf">#colorbarf</NavLink></div>
              </div>

              <div className="content">
                <Route exact path="/" component={JumpGraphs}/>
                <Route path="/jumps" component={JumpGraphs}/>
                <Route path="/colorbarf" component={Colorbarf}/>
              </div>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
