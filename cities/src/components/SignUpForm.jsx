import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(4),
    }
  }));


const SignupForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')



    const classes = useStyles();

    return (
        <form onSubmit={e => {
            e.preventDefault();
            submit({ email, password, firstname, lastname })
            setEmail('')
            setPassword('')
            setFirstname('')
            setLastname('')
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
            <TextField
            id="firstname"
            label="First Name"
            type="text"
            value={firstname}
            onChange={(e => setFirstname(e.target.value))}
            margin="normal"
            />
            <br></br>
            <TextField
            id="lastname"
            label="Last Name"
            type="text"
            value={lastname}
            onChange={(e => setLastname(e.target.value))}
            margin="normal"
            />
            <br></br>
            <Button variant="contained" color='primary' size="medium" className={classes.button} type="submit">
            SignUp
            </Button>
        </form>
    )
}

export default SignupForm
