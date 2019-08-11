import React from 'react';
import Navbar from '../containers/Navbar'
import HomepageContainer from '../containers/HomepageContainer'

const Homepage = (props) =>{
    return(
        <React.Fragment>
        <Navbar pathname={props.pathname} cities={props.cities}></Navbar>
        <HomepageContainer cities={props.cities}></HomepageContainer>
        </React.Fragment>
    )
}
export default Homepage