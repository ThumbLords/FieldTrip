import React, { useState, useEffect } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const ButtonStyles = styled(Button)`
  /* background: ${({ theme }) => theme.button}; */
  /* border: 2px solid ${({ theme }) => theme.toggleBorder}; */
  color: ${({ theme }) => theme.bodyText};
  /* cursor: pointer; */
  /* font-size: 0.8rem; */
  /* padding: 0.6rem; */
  :hover {
    /* background: ${({ theme }) => theme.toggleHover}; */
    /* border: 2px solid ${({ theme }) => theme.hoverBorder} */
  }
`;

const Toggle = ({ systemTheme, toggleTheme }) => {
  const [ btn, setBtn ] = useState(() => systemTheme === 'dark' ? 'Light Mode' : 'Dark Mode');

  const handleButtonChange = () => {
    let temp;
    if (systemTheme === 'dark') {
      temp = 'Dark Mode';
    } else {
      temp = 'Light Mode';
    }
    return temp;
  };

  useEffect(() => {
    return () => {
      setBtn(handleButtonChange());
    };
  }, [systemTheme]);



  return (
      <ButtonStyles aria-label='Change theme button' onClick={toggleTheme}>
        {btn}
      </ButtonStyles>
  );
};

Toggle.propTypes = {
  systemTheme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;