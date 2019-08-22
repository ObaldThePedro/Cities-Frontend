import React from 'react';
import { withRouter } from 'react-router-dom';
import AutoComplete from './AutoComplete'
import { Typography } from '@material-ui/core';




class HomepageContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      childUserinput1: null,
      childUserinput2: null
    }
  }
  
  checkCities = () =>{
    let isFound = false
    let isFound2 = false
    for(let i=0;i< this.props.cities.length;i++)
    {
      if(this.props.cities[i].name === this.state.childUserinput1){
        isFound = true
      }
      if(this.props.cities[i].name === this.state.childUserinput2){
        isFound2 = true
      }
    }
    return isFound && isFound2 ? true : false 
  }

  handleClick = () =>{
    let isFound = false
    let isFound2 = false
    for(let i=0;i< this.props.cities.length;i++)
    {
      if(this.props.cities[i].name === this.state.childUserinput1){
        isFound = true
      }
      if(this.props.cities[i].name === this.state.childUserinput2){
        isFound2 = true
      }
    }
    return isFound && isFound2 ? this.props.history.push({pathname: `/compare/${this.state.childUserinput1}/${this.state.childUserinput2}/`, state: {cities: [this.state.childUserinput1, this.state.childUserinput2, this.props.cities]} }) : window.alert("Please select 2 valid cities")
      // if(this.state.childUserinput1 && this.state.childUserinput2)
      // {
      //   if(this.props.cities.name.includes(this.state.childUserinput1 && this.state.childUserinput2)){
      //   return this.props.history.push({pathname: `/compare/${this.state.childUserinput1}/${this.state.childUserinput2}/`, state: {cities: [this.state.childUserinput1, this.state.childUserinput2, this.props.cities]} })
      // }
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
          <div> 
            <AutoComplete cities={this.props.cities} getData={this.getDropdownCities}></AutoComplete>
          </div>
          <div>
            <AutoComplete cities={this.props.cities} getData={this.getDropdownCities2}></AutoComplete>
          </div>
      </div>
      {/* <div className="description-wrapper">
        <h5 style={{textAlign:'center'}}>Compare over 200 cities from around the world with our city comparison tools. Explore important information such as GDP, population, housing costs.</h5>
      </div> */}
        <button className="compare-button" disabled={!this.checkCities()} onClick={this.handleClick}>Compare</button>
    </React.Fragment>
  );
  }
}

export default withRouter(HomepageContainer);