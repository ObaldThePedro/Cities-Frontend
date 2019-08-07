import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(4),
    }
  }));

const Login = ({ logIn, header }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const classes = useStyles();

    return (
        <form maxWidth="sm" style={{marginLeft:'60%',marginTop: '30vh',backgroundColor:'#fafafa' , border: '2px solid #80cbc4',borderRadius:'3px', boxShadow:'2px 2px 1px rgba(0,0,0,0.4)', width:'250px', height:'270px', textAlign:'center'}} onSubmit={e => {
            e.preventDefault();
            logIn({ email, password })
            setEmail('')
            setPassword('')
        }}>
            <span>{header}</span>
            <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            margin="normal"
            />
            <br></br>
            <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e => setPassword(e.target.value))}
            margin="normal"
            />
            <br></br>
            <Button variant="contained" color='primary' size="medium" className={classes.button} type="submit">
            Login
            </Button>
        </form>
    )
}

export default Login
