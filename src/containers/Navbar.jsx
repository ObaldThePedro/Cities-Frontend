import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  color:{
      backgroundColor:'#616161',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




const Navbar = (props) =>{
  const classes = useStyles();
  
  //create my button so I can use material Ui styling and do navegation on click
  const MyButton = withRouter(({history})=> {
    switch(props.pathname){
      case '/cities':
          return(
            <Button style={{color: 'white'}} onClick={() => { history.push('/', { cities: props.cities}) }}>
              Homepage
            </Button>);
      case '/':
        return(
          <Button style={{color: 'white'}} onClick={() => { history.push('/cities', { cities: props.cities}) }}>
          Cities
        </Button>);
      case '/city/:city':
        return(
          <React.Fragment>
          <Button style={{color: 'white'}} onClick={() => { history.push('/', { cities: props.cities}) }}>
          Homepage
        </Button>
         <Button style={{color: 'white'}} onClick={() => { history.push('/cities', { cities: props.cities}) }}>
         Cities
       </Button>
       </React.Fragment>);
       case `/compare/${props.cities[0]}/${props.cities[1]}/`:
         return(
          <React.Fragment>
          <Button style={{color: 'white'}} onClick={() => { history.push('/', { cities: props.cities[2]}) }}>
          Homepage
        </Button>
         <Button style={{color: 'white'}} onClick={() => { history.push('/cities', { cities: props.cities[2]}) }}>
         Cities
       </Button>
       </React.Fragment>);
      default:
        return null
    }
    
  })
    //passing down cities props on click
   

  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CitiesApp
          </Typography>
             <MyButton color="inherit"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;