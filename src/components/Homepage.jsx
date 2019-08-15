import React from 'react';
import Navbar from '../containers/Navbar'
import HomepageContainer from '../containers/HomepageContainer'
import LinearProgress from '@material-ui/core/LinearProgress'

export default class Homepage extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false
        }
    }

    componentDidMount()
  {
      this.setState({loading: true})
     setTimeout(() => this.setState({loading: false}), 300)
  }

    render(){
    return(
        this.state.loading ? 
            <div>
            <LinearProgress />
            </div>
        :
        <React.Fragment>
        <Navbar pathname={this.props.pathname} cities={this.props.cities}></Navbar>
        <HomepageContainer cities={this.props.cities}></HomepageContainer>
        </React.Fragment>
    )
    }
}