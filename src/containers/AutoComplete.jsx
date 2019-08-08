import React from 'react';

export default class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            
        }
    }

    handleChange = (e) =>{
        let cities= []
        let suggestions = []
        const value = e.target.value
        if(value.length === 0){
            this.setState({
                suggestions: []
            })}
            else{
                for(let i=0;i< this.props.cities.length;i++){
                    cities.push(this.props.cities[i].name)
                }
                console.log(cities)
                const regex = new RegExp(`^${value}`,'i');
                console.log(regex)
                suggestions = cities.sort().filter(name => name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                console.log(suggestions)
                this.setState({suggestions: suggestions})
            }
        }

    render(){
        return <div>
            <input onChange={this.handleChange} type="text"/>
            <ul>
                {this.props.cities.map(city => <li>{city.name}</li>)}
            </ul>
        </div>
    }
}