import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//
// const styles = theme => ({
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
// });

class NewJump extends Component {
  state = {
    dropzone: '',
    date: '',
    lastJump: '',
    altitude: '',
    jumpType: '',
    jumpNumber: ''
  };

  getNextJumpNumber = () => {
    return this.state.jumpNumber
  }

  componentDidMount() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let date = year + '-' + month + '-' + day;

    this.setState({
      date: date
    })

    this.callApi()
      .then(res => {
        this.setState({
          lastJump: res.data[res.data.length-1],
          jumpNumber: res.data[res.data.length-1].jump_number + 1,
          dropzone: res.data[res.data.length-1].location
         })
      }).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/skydives');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addJump = async () => {
    let bodyString = 'jump_number=' + this.state.jumpNumber +
                      '&jump_date=' + this.state.date +
                      '&type=' + this.state.jumpType +
                      '&altitude=' + this.state.altitude +
                      '&location=' + this.state.dropzone

    console.log(bodyString)
    let settings = {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: bodyString
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
        <h1>Add A Jump</h1>
          <form
            // className={classes.container}
            onSubmit={this.addJump}
            noValidate
            autoComplete="off">
            <TextField
              id="dropzone"
              label="Dropzone"
              // className={classes.textField}
              value={this.state.dropzone}
              onChange={this.handleChange('dropzone')}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="date"
              label="Date"
              // className={classes.textField}
              value={this.state.date}
              onChange={this.handleChange('date')}
              margin="normal"
            />
            <TextField
              id="jumpNumber"
              label="Jump Number"
              // className={classes.textField}
              value={this.getNextJumpNumber()}
              onChange={this.handleChange('jumpNumber')}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="altitude"
              label="Altitude"
              // className={classes.textField}
              value={this.state.altitude}
              onChange={this.handleChange('altitude')}
              margin="normal"
            />
            <TextField
              id="jumpType"
              label="Jump Type"
              // className={classes.textField}
              value={this.state.jumpType}
              onChange={this.handleChange('jumpType')}
              margin="normal"
            />
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}
//
// NewJump.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default NewJump;
// export default withStyles(styles)(NewJump);
