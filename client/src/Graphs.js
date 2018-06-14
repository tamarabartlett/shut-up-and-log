import React, { Component } from 'react';
import './css/App.css';
import { ReadJumpsJson, ReadJumpsByMonth } from './readJumps';
import BarGraphPanel from './BarGraphPanel.js';
import PieChartPanel from './PieChartPanel.js';

const getJumpType = (jumps) => {
  return ReadJumpsJson(jumps, "type")
};

const getJumpLocation = (jumps) => {
  return ReadJumpsJson(jumps, "location")
};

const getJumpsByMonth = (jumps) => {
  return ReadJumpsByMonth(jumps)
}

class Graphs extends Component {
  render() {
    let jumps = this.props.jumps

    return (
      <div>
        <BarGraphPanel data={getJumpsByMonth(jumps)} chartName="Jump #s by Month"/>
        <PieChartPanel data={getJumpType(jumps)} chartName="Jumps By Type"/>
        <PieChartPanel data={getJumpLocation(jumps)} chartName="Jumps By Location"/>
      </div>
    );
  }
}

export default Graphs;
