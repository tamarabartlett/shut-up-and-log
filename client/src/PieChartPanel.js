import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const styles = {
  panel: {
    background: 'linear-gradient(75deg, #fffc31, #29bf12)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    // boxShadow: '0px 3px 15px #222',
  },
};

const colors = ['#DD3B76', '#f28b4e', '#29bf12']

function ExpansionPanelGraph(props) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary className={props.classes.panel} expandIcon={<ExpandMoreIcon />}>
        <Typography>{props.chartName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="Panel">
        <div className="Center-Chart">
          <PieChart width={300} height={200}>
            <Pie dataKey="value" data={props.data} cx="50%" cy="50%" outerRadius={80}>
              {
                props.data.map((entry, index) => (
                  <Cell key={index} fill={colors[index]}/>
                ))
              }
            </Pie>
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="left"/>
          </PieChart>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

ExpansionPanelGraph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelGraph);
