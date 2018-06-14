import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './css/App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BarGraph from './BarGraph.js'


const styles = {
  panel: {
    background: 'linear-gradient(75deg, #fffc31, #29bf12)',

    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    // boxShadow: '0px 3px 15px #222',
  },
};


class BarGraphPanel extends Component {
  constructor(props) {
    super(props);
    // this.derp = this.derp.bind(this, 'Derpalerp');
    // this.blerp = this.blerp.bind(this, 'Blerpalerp');
    // this.ferp = this.ferp.bind(this, 'Ferpalerp');
    this.state = {
      data: ''
    }
  }

  // derp = (param, e) => {
  //   console.log("derp");
  //   // console.log('Parameter', param);
  //   console.log('Event', e['name']);
  //
  //   // let monthName = e['name']
  //   if (e['name']){
  //     console.log(e['name'])
  //   }
  //   const newData = [{name: '1', value: 1},
  //                 {name: '2', value: 2},
  //                 {name: '3', value: 4},
  //                 {name: '4', value: 4},
  //                 {name: '5', value: 8},
  //                 {name: '6', value: 2}]
  //   this.setState({ data: newData })
  // }
  //
  // blerp = (param, e) => {
  //   console.log("blerp");
  //   // console.log('Parameter', param);
  //   console.log('Event', e);
  //   // if (e['name']){
  //   //   console.log(e['name'])
  //   // }
  //
  //   // const newData = [{name: 'a', value: 1},
  //   //               {name: 'b', value: 2},
  //   //               {name: 'c', value: 3}]
  //   // this.setState({ data: newData })
  // }
  // ferp = (param, e) => {
  //   console.log("ferp");
  //   // console.log('Parameter', param);
  //   console.log('Event', e);
  //   const newData = [{name: '1', value: 1},
  //                 {name: '2', value: 2},
  //                 {name: '3', value: 4},
  //                 {name: '4', value: 4},
  //                 {name: '5', value: 8},
  //                 {name: '6', value: 2}]
  //   this.setState({ data: newData })
  // }

  render() {
    console.log("DATER");
    console.log(this.props.data);

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary className={this.props.classes.panel} expandIcon={<ExpandMoreIcon />}>
          <Typography>{this.props.chartName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className="Panel"
          // onClick={this.ferp}
          >
          <BarGraph data={this.props.data} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}


BarGraphPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarGraphPanel);
