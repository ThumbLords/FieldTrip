import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CategoryDialog from '../Home/CategoryDialog.jsx';
import logo from '../../assets/LogoNoBack.png';
import ThemeStepper from './ThemeStepper.jsx';
import Toggle from '../ThemeSwitcher/Toggler.js';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    background: 'transparent',
    backdropFilter: 'blur(10px)',
  },
  headerDefault: {
    background: '#090b17',
    backdropFilter: 'blur(8px)',
  },
  vertDiv: {
    backgroundColor: 'rgba(115,107,251,0.77)',
  }
}));

const AppBarHeader = ({ user, logout, discView, setDiscView, theme, setTheme, search, setSearch, setStepperCount, themeLength, systemTheme, toggleTheme }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <header className="headerDefault" >
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <a href='/'>
              <img className="logo" src={logo} alt="" width="250px"/>
            </a>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <ThemeStepper setStepperCount={setStepperCount} themeLength={themeLength} theme={theme} />
            <Toggle systemTheme={systemTheme} toggleTheme={toggleTheme}/>
            <Divider className={classes.vertDiv} orientation="vertical" flexItem />
            {
              user && (<CategoryDialog theme={theme} setTheme={setTheme} discView={discView} setDiscView={setDiscView} theme={theme} setTheme={setTheme} search={search} setSearch={setSearch}/>)
            }
            <Divider className={classes.vertDiv} orientation="vertical" flexItem />
            <Button variant='text' id='btn' onClick={logout}>
              {user ? 'Logout' : null}
            </Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default AppBarHeader;