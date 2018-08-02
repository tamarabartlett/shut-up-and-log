import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class NewJump extends Component {
  state = {
    dropzone: 'Orange Skies',
    date: 'Today',
    lastJump: '',
    greeting: 'Hiiiii',
  };

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value,
    })
  }

  getNextJumpNumber = () => {
    return this.state.lastJump.jump_number + 1
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({
          lastJump: res.data[res.data.length-1]
         })
      }).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/skydives');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Add A Jump</h1>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="dropzone"
              label="Dropzone"
              className={classes.textField}
              value={this.state.lastJump.location}
              onChange={this.handleChange('dropzone')}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="date"
              label="Date"
              className={classes.textField}
              value={this.state.date}
              onChange={this.handleChange('date')}
              margin="normal"
            />
            <TextField
              id="jumpNumber"
              label="Jump Number"
              className={classes.textField}
              value={this.getNextJumpNumber()}
              onChange={this.handleChange('jumpNumber')}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </form>
      </div>
    );
  }
}

NewJump.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewJump);
