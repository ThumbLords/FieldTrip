import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import avatarDefaultGrey from '../../assets/avatarDefaultGrey.jpg';
import avatarDefaultPurple from '../../assets/avatarDefaultPurple.jpg';
import googley from '../../assets/googleycactusNoBG.png';
import astro from '../../assets/astrojellyNoBG.png';
import astroNotFlipped from '../../assets/astroNOTNoBGUpsideDown.png';
import treeHugger from '../../assets/treeHugger.png';
import pharaohGolden from '../../assets/pharaohGolden.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

 const DialogSelectAvatar = ({avatar, setAvatar, saveAvatar}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAvatar(String(event.target.value) || avatarDefaultGrey);
    saveAvatar(String(event.target.value) || avatarDefaultGrey);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    console.log(event);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} className='choose-avatar-btn'>Choose Your Avatar</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a New Avatar!</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <Select
                native
                value={avatar}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
                className='avatar-selector'
              >
                <option aria-label="None" value=""/>
                <option value={astro}>Astro Jelly</option>
                <option value={treeHugger}>Don't worry, tree happy</option>
                <option value={googley}>Googley Cactus</option>
                <option value={astroNotFlipped}>Astro-NOT-OKAY</option>
                <option value={pharaohGolden}>PharWoah</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id='btn'>
            Cancel
          </Button>
          <Button onClick={handleClose} id='btn'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogSelectAvatar;