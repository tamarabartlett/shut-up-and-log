import React, { Component } from "react";
import LastJump from './LastJump.js';
import Graphs from './Graphs.js';

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
    return (
      <div>
        <LastJump jump={this.state.lastJump}/>
        <Graphs jumps={this.state.jumps}/>
      </div>
    );
  }
}

export default JumpGraphs;
