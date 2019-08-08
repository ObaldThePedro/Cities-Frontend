import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NewYork from '../img/homepage.jpeg';
import InputBase from '@material-ui/core/InputBase';
import AutoComplete from './AutoComplete'

const useStyles = makeStyles(theme => ({
    main_container:{
      position: 'relative',
      backgroundColor: '#e3f2fd',
      height: '60vh',
      marginTop: '15vh',
      border: 'solid 1px #b0bec5'
      },
      title:{
        textAlign:'center'
      },
      sub_container:{
        height:'50vh',
        padding: '0px',
        boxShadow: '1px 1px 4px'
      },
      description:{
        flexGrow: 1,
        position: 'absolute',
        top: '200px', 
        left: '0', 
        width: '100%',
        textAlign: 'center',
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      input: {
        bottom: '100px',
        marginLeft: '40%',
        marginRight: '40%',
        width: '15%',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '3px'
      },
      image:{
        position:'relative',
        opacity: '0.3',
        maxWidth: '100%',
        maxHeight: '100%',
        height: '100%',
        width: '100%',
        border: 'solid 1px'
      }

  }));


const HomepageContainer = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" className={classes.main_container}>
        <Typography className={classes.title} variant='h2'>Cities</Typography>
        <Container maxWidth="false" className={classes.sub_container}>
          <img src={NewYork} className={classes.image}>
          </img>
              <Typography variant='h5' className={classes.description}>Get to know your dream city. Compare your dream city with other cities on quality of life, salaries, cost of living and more.</Typography>
        </Container>
        <AutoComplete cities={props.cities} ></AutoComplete>
        <InputBase placeholder="Search city" className={classes.input}></InputBase>
      </Container>
      
    </React.Fragment>
  );
}

export default HomepageContainer;