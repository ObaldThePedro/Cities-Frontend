import React from 'react';
import {Route} from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Welcome from './components/Welcome'

const Routes = () =>{
    return( 
    <div>
        
        {/* <Route exact path='/login' render={Login}></Route> */}
        {/* <Route exact path='/welcome' render={Welcome}></Route> */}
    </div>
    )
}

export default Routes