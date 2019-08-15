import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export class Autocomplete extends React.Component {
    static propTypes = {
      suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
      suggestions: []
    };
    constructor(props) {
      super(props);
      this.state = {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ""
      };
    }
  
    onChange = e => {
      const userInput = e.currentTarget.value;
      let cities= []
  
    for(let i=0;i< this.props.cities.length;i++)
    {
        cities.push(this.props.cities[i].name)
    }
    
    const filteredSuggestions = cities.sort().filter(city => city.toLocaleLowerCase().startsWith(userInput.toLocaleLowerCase()))
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
      });
    };
  
    onClick = e => {
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText,
      },this.props.getData(e.currentTarget.innerText));
      
    };

    
    onKeyDown = e => {
      const { activeSuggestion, filteredSuggestions } = this.state;
  
      if (e.keyCode === 13) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestions[activeSuggestion]
        });
      } else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
          return;
        }
        this.setState({ activeSuggestion: activeSuggestion - 1 });
      } else if (e.keyCode === 40) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
          return;
        }
        
        this.setState({ activeSuggestion: activeSuggestion + 1 });
      }
      this.props.getData(this.state.userInput)
    };
  
    render(){
      const {
        onChange,
        onClick,
        onKeyDown,
        state: {
          activeSuggestion,
          filteredSuggestions,
          showSuggestions,
          userInput
        }
      } = this;
      let suggestionsListComponent;
      if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul class="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
  
                if (index === activeSuggestion) {
                  className = "";
                }
  
                return (
                  <li key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div class="no-suggestions">
              <em>No suggestions</em>
            </div>
          );
        }
      }
  
      return (
        <React.Fragment>
          <input
            type="search"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {suggestionsListComponent}
        </React.Fragment>
      );
    }
  }
  
  export default Autocomplete;
  