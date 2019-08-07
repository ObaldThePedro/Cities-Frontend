import React, { Fragment } from 'react';
import API from './adapters/API'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Homepage from './components/Homepage'
import createAuthRoute from './components/AuthRoute';



export default class App extends React.Component {
  state = {
    user: undefined
  }

  checkUser = () => !!this.state.user 

  checkToken = () => !!localStorage.getItem('token')

  componentDidMount() {
    API.validateUser()
      .then(data => {
        if (!data.user) {
          console.error(data.error)
          // display some error
          // this.props.history.push('/login')
        } else {
          this.setState({ user: data.user })
          // this.props.history.push('/dashboard')
        }
      })
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  render() {

    const AuthRoute = createAuthRoute(this.checkUser, this.checkToken)

    return (
      <div className="App">
             <Route exact path="/welcome" component={routerProps => <Welcome {...routerProps} signUp={this.signUp}/>}/>
             <Route exact path='/login' component={routerProps => <Login {...routerProps} logIn={this.logIn}/>}/>
             <AuthRoute exact path='/homepage' component={routerProps => <Homepage {...routerProps} user={this.state.user}/>}/>
              {/* <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} /> */}

         {/* {!(this.state.user) ? 
          <Router>
            <Route path="/homepage" render={routerProps => <Homepage {...routerProps}/>}
          />
         </Router> : <h1>Hello {this.state.user.firstname}</h1>} */}
      </div>
    );
  }
} 
