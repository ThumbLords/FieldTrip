import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap/';
import Trophy from '../../assets/trophy.png';

const AlertContainer = styled(Container)`
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem 2rem;
    width: 33.33%;
    height: auto;
  img{
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 5px;
    margin: 0px;
    filter: grayscale(100%);
  }
`

const AlertItem = ({alert, font}) => {
  return (
      <AlertContainer className='alert-container'>
        <div className="img-container">
          <img src={!alert.image ? Trophy : alert.image}/>
        </div>
        <p style={{ fontSize: font }}>You earned a stamp in your passport!</p>
      {/* <p>{`You ${alert.action} a ${alert.resource}!`}</p> */}
        <p>{alert.date.slice(0, 10)}</p>
      </AlertContainer>
  );
};



export default AlertItem;


