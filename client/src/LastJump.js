import React from 'react';

const LastJump = (props) => (
  <div className='Last-Jump'>
    <p>Your last jump, #
      <span className='Last-Jump-Data'>{props.jump.number}</span>, <br/> was a
      <span className='Last-Jump-Data'> {props.jump.type}</span> jump on
      <span className='Last-Jump-Data'> {props.jump.date}</span> at
      <span className='Last-Jump-Data'> {props.jump.location}</span> from
      <span className='Last-Jump-Data'> {props.jump.altitude}</span> feet AGL</p>
  </div>
);

export default LastJump;
