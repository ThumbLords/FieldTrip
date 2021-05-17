import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/';
import WeeklyChallenge from './WeeklyChallenge/WeeklyChallenge.jsx';

const LandingInspo = styled.div`
  height: 100%;
  width: 100%;
  color: white;

.intro {
  width: 40%;
  padding-left: 4rem;
  padding-top: 6rem;
  text-align: center;
}
.explanation{
  width: 40%;
  margin-top: 3rem;
  margin-left: 7rem;
  text-align: center;
}
`

const AboutFT = ({ user, getStamps, stamps, font }) => {
  return (

    <LandingInspo>
      <div className="intro">
        <p style={{ fontSize: font }}>
          We believe in free and open access to information. It's okay to not know where you're going and sometimes the best lessons are unexpected. This is your Field Trip, take it wherever you want.
        </p>
      </div>
    <br/>
    <div className="explanation">
      <p>
          Start your Field Trip by exploring resources on the discovery page. Are you interested in space? Or natural history? How about life on planet earth? Change the category of study with the category chooser on the top of the page. Customize your profile and see your stamps appear as you explore!
      </p>
    </div>
    {
          user ?

          <WeeklyChallenge getStamps={getStamps} user={user} stamps={stamps} font={font} />

        : null
      }
    </LandingInspo>
  );
}

export default AboutFT;