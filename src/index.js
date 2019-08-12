import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CityPage from './components/CityPage';
import CitiesPage from './components/CitiesPage';
import CompareCities from './components/CompareCities';

ReactDOM.render(
    (<>
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/city/:city' component={CityPage}/>
            <Route exact path='/cities' component={CitiesPage}/>
            <Route exact path='/compare/:cityA/:cityB/' component={CompareCities}/>
        </Switch>
    </Router>
    </>
    ),
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
