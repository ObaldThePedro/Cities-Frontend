import React from 'react';
import Card from '../containers/Card'
import Navbar from '../containers/Navbar'
import LinearProgress from '@material-ui/core/LinearProgress';
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import Fab from '@material-ui/core/Fab';
import Image from '../img/yes.jpeg'
import API from '../adapters/API'


export default class CitiesPage extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            isContinent: false,
            selectedContinent: "na",
            loading: false,
            counter: 500,
            selectedCities: [],
            NA: [],
            EU: [],
            ASIA: [],
            AFRICA: [],
            OCEANIA: [],
            SA: []
        }
    }

    handleCheckbox = (event) =>{
      const target = event.target
      const value = target.checked
      const name = target.name
      this.setState({[name]: value})
    }

    handleSelectedContinent = (event) => 
    {
      console.log(this.state.SA)
      this.setState({selectedContinent: event.target.value})
    }

    nextPageOfCities = () => this.setState({ counter: this.state.counter + 5})

    handleChange = (e) =>{
       const value = e.target.value;
        this.setState({ value: value})
    }


    filterAllCities = () => {
       return this.props.location.state.cities
       .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
       .filter((city, i) => i < this.state.counter)
    }


    addCitiesFromAPI = continentCities => this.setState({
      NA: continentCities[0],
      EU: continentCities[1],
      AFRICA: continentCities[2],
      SA: continentCities[4],
      ASIA: continentCities[5],
      OCEANIA: continentCities[6]
    })

    componentDidMount()
    {
        API.getAllCities()
        .then(this.addCitiesFromAPI)
        
  
      //   this.setState({loading: true})
      //  setTimeout(() => this.setState({loading: false}), 1000)
    } 

    renderFilteredCities = () =>{
      switch(this.state.selectedContinent){
        case 'na':
          return(this.state.isContinent ?
          this.state.NA
          .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
          .filter((city, i) => i < this.state.counter) : this.filterAllCities())
          break;
        case 'sa':
          return(this.state.isContinent ?
          this.state.SA
          .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
          .filter((city, i) => i < this.state.counter) : this.filterAllCities())
          break;
        case 'eu':
          return(this.state.isContinent ?
          this.state.EU 
          .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
          .filter((city, i) => i < this.state.counter) : this.filterAllCities())
          break;
        case 'asia':
          return(this.state.isContinent ?
          this.state.ASIA
          .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
          .filter((city, i) => i < this.state.counter) : this.filterAllCities())
          break;
        case 'africa':
            return(this.state.isContinent ?
            this.state.AFRICA
          .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
          .filter((city, i) => i < this.state.counter) : this.filterAllCities())
          break;
        case 'oceania':
            return(this.state.isContinent ?
            this.state.OCEANIA
            .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
            .filter((city, i) => i < this.state.counter) : this.filterAllCities())
            break;  
        default:
          return this.filterAllCities()
      }
    }
  

  

  addCityToSelection = (city) => {
    if (this.state.selectedCities.includes(city)) {
      this.setState({
        selectedCities: this.state.selectedCities.filter(c => c !== city)
      })
    } else if(this.state.selectedCities.length < 2) {
      this.setState({
        selectedCities: [...this.state.selectedCities, city]
      })
    }
  }

  renderDropDown = () => {
    return(this.state.isContinent ? 
    <select value={this.state.selectedContinent} onChange={this.handleSelectedContinent}>
      <option value="na">North America</option>
      <option value="sa">South America</option>
      <option value="eu">Europe</option>
      <option value="asia">Asia</option>
      <option value="africa">Africa</option>
      <option value="oceania">Oceania</option>
    </select> : 
  <select disabled>
    <option>North America</option>
    <option>South America</option>
    <option>Europe</option>
    <option>Asia</option>
    <option>Africa</option>
    <option>Oceania</option>
  </select>)
  }

    render(){
      const filteredCities = this.renderFilteredCities()
      
        return(
            <div>
                {this.state.loading ? 
                <div>
                <LinearProgress />
                </div>
                :
                <div>
                <Navbar pathname={this.props.location.pathname} cities={this.props.location.state.cities}/>
                <input placeholder="Search a city" value={this.state.value} onChange={this.handleChange} type="text"/>
                <label>
                  Filter by Continent:
                  <input name="isContinent"
                  type="checkbox"
                  checked={this.state.isContinent}
                  onChange={this.handleCheckbox}>
                  </input>
                </label>
                  <h3>{this.renderFilteredCities().length} Search Results</h3>
                  {this.renderDropDown()}
                {
                  this.state.selectedCities.length == 2 && 
                  <Fab variant="extended" color="secondary" aria-label="add">
                    <Link to={{pathname:`/compare/${this.state.selectedCities[0]}/${this.state.selectedCities[1]}/`, state:{cities: [ this.state.selectedCities[0], this.state.selectedCities[1], this.props.location.state.cities] }}}>Compare</Link>
                  </Fab>
                }
                  <InfiniteScroll
                  dataLength={filteredCities.length} //This is important field to render the next data
                  next={this.nextPageOfCities}
                  hasMore={this.state.counter < this.props.location.state.cities.length}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{textAlign: 'center'}}>
                      <b>No more cities to be displayed!</b>
                    </p>
                  }
                  >
                  {this.renderFilteredCities().map(city => 
                  <Card key={city.name} selected={this.state.selectedCities.includes(city.name)} cities={this.props.location.state.cities} addCityToSelection={this.addCityToSelection} city={city}/>
                )}
              </InfiniteScroll>
                  </div>}
            </div>
        )
    }
}