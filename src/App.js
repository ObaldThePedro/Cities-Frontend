import React from 'react';
import API from './adapters/API'
import Homepage from './components/Homepage'
import './App.css'



export default class App extends React.Component
{
constructor(){
    super()
    this.state ={
      cities: []
    }
  }

  addCitiesFromAPI = continentCities => this.setState({
    cities: continentCities.flat()
  })

  componentDidMount()
  {
    API.getAllCities()
      .then(this.addCitiesFromAPI)
  }


  render(){
    return(
    <div>
      <Homepage pathname={this.props.location.pathname} cities={this.state.cities}></Homepage>
      </div>
    )
  }
}