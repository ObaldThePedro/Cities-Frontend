import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import AutoComplete from './AutoComplete'

const useStyles = makeStyles(theme => ({
      container:{
        backgroundColor: '#e6e6e6',
        width: '100%',
        height: '450px'
      }
      ,
      input: {
        border:'none',
        marginLeft: '40%',
        marginRight: '40%',
        width: '25%',
        height: '30%',
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '4px',
        boxShadow: '1px 2px 3px'
      }
  }));


const HomepageContainer = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth="xl">
      <div className="wrapper">
        <div>
          <AutoComplete cities={props.cities} input_style={classes.input}></AutoComplete>
        </div>
        <div>
          <AutoComplete cities={props.cities} input_style={classes.input}></AutoComplete>
        </div>
      </div>
      </Container>
        
    </React.Fragment>
  );
}

export default HomepageContainer;