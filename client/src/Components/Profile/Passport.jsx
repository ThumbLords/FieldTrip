import React from 'react';
import Stamp from './Stamp.jsx';
import styled from 'styled-components';

const Passport = ({stamps, badges}) => {

  return (
    <div className="stamp-container">
      <h3 style={{color: 'ghostwhite'}}>Passport</h3>
      {!stamps.length ?
      <p>Explore on the discovery tab to earn stamps!</p> :
      stamps.reverse().map((stamp, i) => <Stamp stamp={stamp} key={i}/>)}
    </div>
  );
};
export default Passport;