import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [ systemTheme, setSystemTheme ] = useState('dark');
  const [ mountedComponent, setMountedComponent ] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setSystemTheme(mode);
  };

  const themeToggler = () => {
    systemTheme === 'dark'
      ? setMode('light')
      : setMode('dark');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setSystemTheme(localTheme) : setMode('dark');
    setMountedComponent(true);
  }, []);

  return [ systemTheme, themeToggler, mountedComponent ];
};