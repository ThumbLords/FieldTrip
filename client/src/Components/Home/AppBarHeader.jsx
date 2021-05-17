import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CategoryDialog from '../Home/CategoryDialog.jsx';
import logo from '../../assets/LogoNoBack.png';
import ThemeStepper from './ThemeStepper.jsx';

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
}));

const AppBarHeader = ({ user, logout, discView, setDiscView, theme, setTheme, search, setSearch, setStepperCount, themeLength }) => {
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
            <>
              { user ?
              (<CategoryDialog theme={theme} setTheme={setTheme} discView={discView} setDiscView={setDiscView} theme={theme} setTheme={setTheme} search={search} setSearch={setSearch} />) : null
              }
            </>
            <Button variant='text' color='inherit' onClick={logout}>
              {user ? 'Logout' : null}
            </Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default AppBarHeader;