import React from 'react';
import {Link} from 'react-router-dom'

export default class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            value:''
        }
    }

    handleChange = (e) =>{
        let cities= []
        let suggestions = []
        const value = e.target.value
        
        
        if(value.length === 0){
            this.setState({
                suggestions: [],
                value: value
            })}
            else{
                for(let i=0;i< this.props.cities.length;i++){
                    cities.push(this.props.cities[i].name)
                }
                suggestions = cities.sort().filter(city => city.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
                this.setState({suggestions: suggestions, value: value})
            }
        }
        //clean string for white spaces
        suggestionSelected = (value) =>{ this.setState( {value: value,suggestions: [] })}
        
        renderSuggestions = () =>{
            const {suggestions} = this.state
            
            if(suggestions.length === 0){
                return null
            }
                return(
                    <ul>
                        {suggestions.map((city => <li>
                        <Link to={{pathname:`/city/${city}`, state:{cities: this.props.cities}}} >{city}</Link>
                        </li>))}
                    </ul>
                )
        }

        render(){
        return(
        <div style={{width:'100%',textAlign:"center", border: '1px solid grey', boxShadow: '0 0 0 1px rgba(0,0,0, 0.1), 0 2px 4px 1px regba(0,0,0, 0.18)'
        }}>
            <input placeholder="Search a city" value={this.state.value} onChange={this.handleChange} className={this.props.input_style} type="text"/>
            {this.renderSuggestions()}
            
        </div>)
    }
}