import React from 'react';
import Stamp from './Stamp.jsx';
import styled from 'styled-components';

// const Container = styled.div`
//   background-color: whitesmoke;
//   border-radius: 180px !important;
//   border: 3px !important;
//   border-color: whitesmoke !important;
//   margin: 3rem auto;
//   margin-bottom: 5rem;
//   padding: 20px;
//   display: flex;
//   flex-flow: row wrap;
//   width: 65%;
//   justify-content: center;
//   color: rgb(9, 11, 23);
// h3{
//   color: rgb(9, 11, 23);
//   text-align: center;
//   width: 100%;
//   margin-bottom: 1rem;
//   margin-top: 0.25rem;
// }
// `
// const Container = styled.div`
//     /* background-color: rgb(248, 248, 255, .67); */
//     background-color: rgb(248, 248, 255, 0.5);
//     border-radius: 10px !important;
//     border: 3px !important;
//     border-color: whitesmoke !important;
//     margin: 3rem auto;
//     margin-bottom: 5rem;
//     padding: 20px;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-flex-flow: row wrap;
//     -ms-flex-flow: row wrap;
//     flex-flow: row wrap;
//     width: 65%;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     color: rgb(9,11,23);
//     backdrop-filter: blur(10px);
// h3{
//   color: rgb(9, 11, 23);
//   text-align: center;
//   width: 100%;
//   margin-bottom: 1rem;
//   margin-top: 0.25rem;
// }
// `
const Passport = ({stamps, badges}) => {
  // console.log(badges, 'BADGES on PASSPORT');

  return (

    <>
      {/* <Container className="stamp-container"> */}
      <div className="stamp-container">
        <h3>Passport</h3>
        {!stamps.length ?
        <p>Explore on the discovery tab to earn stamps!</p> :
        stamps.reverse().map((stamp, i) => <Stamp stamp={stamp} key={i}/>)}
      {/* </Container> */}
      </div>
    </>
  );
};
export default Passport;