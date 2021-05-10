import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/';

const LandingInspo = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  p{
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`



const AboutFT = ({ font }) => {


  return (

    <LandingInspo>
    <p style={{ fontSize: font }}>
        We believe in free and open access to information. It's okay to not know where you're going and sometimes the best lessons are unexpected. This is your Field Trip, take it wherever you want.
    </p>
    </LandingInspo>
  );
}

export default AboutFT;