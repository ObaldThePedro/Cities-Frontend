import React from 'react';
import Card from '../containers/Card'
import Navbar from '../containers/Navbar'
import LinearProgress from '@material-ui/core/LinearProgress';
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import Fab from '@material-ui/core/Fab';


export default class CitiesPage extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            loading: false,
            counter: 500,
            selectedCities: []
        }
    }

    nextPageOfCities = () => this.setState({ counter: this.state.counter + 5})

    handleChange = (e) =>{
       const value = e.target.value;
        this.setState({ value: value})
    }

    filterCities = () => {
       return this.props.location.state.cities
       .filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
       .filter((city, i) => i < this.state.counter)
    }

    componentDidMount()
  {
      this.setState({loading: true})
     setTimeout(() => this.setState({loading: false}), 1000)
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

    render(){
      const filteredCities = this.filterCities()
      
        return(
            <div>
                {this.state.loading ? 
                <div>
                <LinearProgress />
                </div>
                :
                <div>
                <Navbar handleChange={this.handleChange} pathname={this.props.location.pathname} cities={this.props.location.state.cities}/>
                <input placeholder="Search a city" value={this.state.value} onChange={this.handleChange} type="text"/>
                
                {
                  this.state.selectedCities.length == 2 && 
                  <Fab variant="extended" color="primary" aria-label="add">
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
                  {filteredCities.map(city => 
                  <Card key={city.name} selected={this.state.selectedCities.includes(city.name)} cities={this.props.location.state.cities} addCityToSelection={this.addCityToSelection} city={city}/>
                )}
</InfiniteScroll>
                </div>}
            </div>
        )
    }
}