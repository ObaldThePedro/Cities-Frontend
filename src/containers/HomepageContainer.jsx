import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

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


class HomepageContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      childUserinput1: null,
      childUserinput2: null   
    }
  }

  handleClick = () =>{
      console.log("Hello")
     return this.props.history.push({pathname: `/compare/${this.state.childUserinput1}/${this.state.childUserinput2}/`, state: {cities: [this.state.childUserinput1, this.state.childUserinput2, this.props.cities]} })
  }
  getDropdownCities = (state) =>
    this.setState({
      childUserinput1: state
    })

  getDropdownCities2 = (state) =>
    this.setState({
      childUserinput2: state
    })

  render(){
  // const classes = useStyles();
  return (
    <React.Fragment>
      <div className="homepage-container">
      <div className="wrapper">
        <div> 
          <AutoComplete cities={this.props.cities} getData={this.getDropdownCities}></AutoComplete>
        </div>
        <div>
          <AutoComplete cities={this.props.cities} getData={this.getDropdownCities2}></AutoComplete>
        </div>
      </div>
      </div>
      <button class="button button5" onClick={this.handleClick}>Compare</button>
    </React.Fragment>
  );
  }
}

export default withRouter(HomepageContainer);