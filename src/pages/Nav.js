import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
	color: 'black',
  },
  nav: {
	background : 'white',
	justifyContent: 'center', 
    flexDirection: 'row'
  },
  button: {
	  color: 'black',
	  padding: '1%',
	  minWidth: '10px',
	  whiteSpace: 'nowrap',
	  fontWeight: 'bold',
	  
  },
  toolbar: {
		width: '100%',
        maxWidth: 1200
  },
  image: {
		width: 100,
		height: 'auto',
  },
  menuButton: {
	color: 'black',
	borderRadius: 5,
	border: '1px solid gray',
  },
  ic: {
	fontSize: '3rem',
	width: '1.5em',
	height: '0.5em',
  },
  men: {
	minWidth: '260px',
  },
  
}));

function Nav() {
	
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1000px)');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="inherit" className={classes.title}>
			<img className={classes.image} src={logo} alt="Logo" />
          </Typography>
		  {matches ? 
			<>
			<Button className={classes.button} variant="text" color="inherit">Home</Button>
			<Button className={classes.button} variant="text" color="inherit">About</Button>
			<Button className={classes.button} variant="text" color="inherit">Contact Us</Button>
			</>
		  
		  : 
		  
		  <>
		  <IconButton edge="start" className={classes.menuButton}  onClick={handleClick} aria-label="menu">
			<MenuIcon className={classes.ic}/>
			</IconButton>
			<Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
		className={classes.men}
      >
        <MenuItem onClick={handleClose}>Profileeeeeeeeeeeeee</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
		</>
		  }
          
        </Toolbar>
      </AppBar>
	  <Toolbar />
    </div>
  );
}

export default Nav;
