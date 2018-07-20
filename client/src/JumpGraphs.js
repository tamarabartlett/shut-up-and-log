import React, { Component } from "react";
import LastJump from './LastJump.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Graphs from './Graphs.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  fab: {
    position: 'absolute',
    bottom: '3em',
    right: '3em',
    backgroundColor: '#0ad3ff'
  }
});


class JumpGraphs extends Component {
  state = {
    lastJump: '',
    jumps: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({
          lastJump: res.data[res.data.length-1],
          jumps: res.data
         })
      }).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/skydives');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  addJump = async () => {
    let settings = {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: 'jump_number=19&jump_date=2016-10-10&type=freefly&altitude=11000&location=Elsinore'
   };

   let data = await fetch(`api/skydives`, settings)
       .then(response => response.json())
       .then(json => {
           return json;
       })
       .catch(e => {
           return e
       });

       console.log(data);
       return data;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <LastJump jump={this.state.lastJump}/>
        <Graphs jumps={this.state.jumps}/>
          <Button
            variant="fab"
            aria-label="add"
            className={classes.fab}
            onClick={this.addJump}>
            <AddIcon />
          </Button>
      </div>
    );
  }
}


JumpGraphs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JumpGraphs);
