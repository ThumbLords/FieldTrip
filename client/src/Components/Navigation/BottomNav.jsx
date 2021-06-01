import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Divider from '@material-ui/core/Divider';



const bottomNavTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#f8f8ff'
        },
        text: {
            secondary: 'rgba(115,107,251,0.99)'
        }
    }
})

const useStyles = makeStyles({
  // root: {
  //   position: 'fixed',
  //   bottom: '0',
  //   width: '100%',
  //   'z-index': '100',
  //   backgroundColor: 'rgba(9,11,23, 0.92)',
  //   backdropFilter: 'blur(8px)',
  //   boxShadow: '0px 0px 7px 0px #736bfb'
  // },
  vertDiv: {
    backgroundColor: 'rgba(115,107,251,0.77)'
  }
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id='bottom-nav'>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root} id='bottom-nav'>

        <Divider className={classes.vertDiv} orientation="vertical" flexItem />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />

        <BottomNavigationAction
          label="Discovery"
          value="discovery"
          icon={<SearchSharpIcon fontSize="large" className='bottom-nav-icon' />}
          component={Link}
          to="/discovery"
        />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />

        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<EmojiPeopleSharpIcon fontSize="large" className='bottom-nav-icon' />}
          component={Link}
          to="/profile"
        />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />

        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeSharpIcon fontSize="large" className='bottom-nav-icon' />}
          component={Link}
          to="/"
        />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />

        <BottomNavigationAction
          label="Alerts"
          value="alerts"
          icon={<NotificationsSharpIcon fontSize="large" className='bottom-nav-icon' />}
          component={Link}
          to="/alerts"
        />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />

        <BottomNavigationAction
          label="Camera"
          value="photoUpload"
          icon={<CameraAltSharpIcon fontSize="large" className='bottom-nav-icon' />}
          component={Link}
          to="/PhotoUpload"
        />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />
        <Divider className={classes.vertDiv} orientation="vertical" flexItem />

      </BottomNavigation>
    </div>
  );
}

export default BottomNav;