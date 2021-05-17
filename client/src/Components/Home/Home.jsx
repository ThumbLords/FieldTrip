import React, { useState, useEffect } from 'react';
import WeeklyChallenge from './WeeklyChallenge/WeeklyChallenge.jsx'
import styled from 'styled-components';
import LandingHome from './LandingHome.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/';
import globeHands from '../../assets/globeHands.jpg';
import AboutFT from '../Home/AboutFT.jsx'

const HomeStyles = styled.div`
  padding-bottom: 5rem;
  height: 110vh;
  width: 100%;
  background-image: url(${globeHands});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  /* margin-bottom: 40rem; */
`;

const Home = ({user, getStamps, stamps, font}) => {

  return (
      <HomeStyles>
        <AboutFT font={font} user={user} getStamps={getStamps} stamps={stamps}/>
      </HomeStyles>
  );
};

export default Home;