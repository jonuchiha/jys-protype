import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './pages/Nav.js';
import Grids from './pages/Grids.js';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

function App() {
	const classes = useStyles();
	return (
		<>
		<Nav />
		<div className="App">
		<header className={classes.background}>
		<br />
		<Container fixed>
			<Grids />
			<br />
		</Container>
		</header>
		</div>
		</>
	);
}

export default App;
