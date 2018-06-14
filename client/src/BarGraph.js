import React from 'react';
import { Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const BarGraph = (props) => (
  <BarChart
    width={200}
    height={300}
    data={props.data}
    // onClick={this.blerp}
    margin={{top: 5, right: 5, left: 5, bottom: 5}}>
     <XAxis dataKey="name"/>
     <YAxis/>
     <Tooltip/>
     <Legend />
     <Bar
       dataKey="value"
       // onClick={this.derp}
       fill="#00bfff" />
  </BarChart>
);

export default BarGraph;
