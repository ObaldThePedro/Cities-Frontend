import React from 'react';
import Card from '../containers/Card'
import Navbar from '../containers/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FixedSizeList as List } from "react-window";
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default class CitiesPage extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            loading: '',
        }
    }

    handleCheckboxChange = (event) => {
        const { checkboxChangeCallback } = this.props;
        checkboxChangeCallback(event.target.checked);
      };

    handleChange = (e) =>{
       const value = e.target.value;
        this.setState({ value: value})
    }

    filterCities = () => {
       return this.props.location.state.cities.filter(city => city.name.toLocaleLowerCase().startsWith(this.state.value.toLocaleLowerCase()))
    }

    componentDidMount()
  {
      this.setState({loading: true})
     setTimeout(() => this.setState({loading: false}), 1000)
  }



    render(){
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
                {this.filterCities().map(city => <Card handleClick={this.handleClick} city={city}/>)}
                </div>}
            </div>
        )
    }
}