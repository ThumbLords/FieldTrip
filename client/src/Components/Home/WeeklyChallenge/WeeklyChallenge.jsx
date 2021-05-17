import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChallengeCheck from './ChallengeCheck.jsx'
const Container = styled.div`
    background-color: rgb(248, 248, 255, .67);
    border-radius: 10px !important;
    margin: 5rem auto;
    margin-bottom: 5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 80%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: rgb(9,11,23);
    backdrop-filter: blur(10px);
    padding: 1rem;
p{
  color: #1d1d1d;
  text-align: center;
}
.challenge-header{
  color: #1d1d1d;
  text-align: start;
  /* text-decoration: underline; */
  /* font-weight: bold; */
  /* font-size: 4rem; */
  color: black;
}
.challenge{
  color: #1d1d1d;
  text-align: center;
  /* font-size: 3rem; */
}
.complete{
  color: #736bfb;
  /* font-size: 1rem; */
  text-align: center;
  color: black;
}
`
const ParDiv = styled.div`
    position: absolute;
    /* top: 150%; */
    /* left: 50%; */
    transform: translate(-50%, -50%);
`
const challenges = [
  { 0: 'Collect a stamp from each category.' },
  { 1: 'Earn at least 3 \'Earth\' stamps.' },
  { 2: 'Read at least 5 news articles, and view your 5 new stamps in your passport.' },
  { 3: 'Earn at least 3 \'Space\' stamps.' },
  { 4: 'Watch at least 1 documentary in the category of your choice.' },
  { 5: 'Earn at least 3 \'Natural History\' stamps.' },
  { 6: 'Watch 1 documentary and read 1 article from any category' },
];
const WeeklyChallenge = ({ getStamps, user, stamps, font }) => {
  const [daily, setDaily] = useState(() => {
    let date = new Date();
    const day = date.getDay();
    return day;
  });
  const [challenge, setChallenge] = useState(challenges[daily][daily]);
    useEffect(() => {
      let date = new Date();
      const day = date.getDay();
      setChallenge(challenges[day][day])
    }, []);
    useEffect(() => {
      getStamps();
    }, []);
  return (
    <>
      <Container>
        <p className='challenge-header' style={{ fontSize: font + 12, fontWeight: 'bolder' }}>Daily Challenge: {challenge}</p>
        { !stamps.length ?
          <p style={{ fontSize: font}}>Explore on the Discovery Tab to earn stamps!</p> :
        <ChallengeCheck stamps={stamps} challenge={challenge} challenges={challenges} getStamps={getStamps} font={font}/>
        }
      </Container>
    </>
  );
};
export default WeeklyChallenge;