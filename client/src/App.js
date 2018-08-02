import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './css/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Colorbarf from "./Colorbarf";
import JumpGraphs from "./JumpGraphs";
import NewJump from "./NewJump";

const styles = () => ({
  fab: {
    position: 'absolute',
    bottom: '3em',
    right: '3em',
    backgroundColor: '#0ad3ff'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

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
                <Route path="/newJump" component={NewJump}/>
              </div>

              <NavLink to="/newJump">
                <Button
                  variant="fab"
                  aria-label="add"
                  className={classes.fab}>
                  <AddIcon />

                </Button>
              </NavLink>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
