import React from 'react';
import '../App.css'
import SignupForm from './SignUpForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Login from './Login'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'


const Welcome = ({signUp, logIn}) =>{

  return (

    <div>
      {/* <img src={LONDON} className="img"></img> */}
      {/* <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cities
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <CssBaseline />
      <Container maxWidth="sm" style={{marginLeft:'70%',marginTop: '10vh',backgroundColor:'#fafafa' , border: '2px solid #80cbc4',borderRadius:'3px', boxShadow:'2px 2px 1px rgba(0,0,0,0.4)', width:'250px', height:'100px', textAlign:'center'}}>
        <p>Have an account?</p>
          <Button component={Link} to="/login" variant="contained" color='primary' size="small" >Login</Button>
      </Container>
      <Container maxWidth="sm" style={{marginLeft:'70%',marginTop: '1vh',backgroundColor:'#fafafa' , position:'relative', border: '2px solid #80cbc4',borderRadius:'3px', boxShadow:'2px 2px 1px rgba(0,0,0,0.4)', width:'250px', textAlign:'center', paddingBottom:'10px'}}>
        <h1>Cities</h1>
        <p style={{color:'gray'}}>Did you always have the curiosity of how it is to live in your favourite city? Find out its quality of life and cost of living.</p>
        <SignupForm submit={signUp}/>
      </Container>
    </div>
  );
}

export default Welcome
