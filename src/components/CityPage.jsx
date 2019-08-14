import React from 'react';
import Container from '@material-ui/core/Container';
import Chart from '../containers/Chart'
import Navbar from '../containers/Navbar'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { compose } from '@material-ui/system';
import { thisExpression } from '@babel/types';


export default class CityPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categories: [],
            summary: "",
            url: "",
            chartData: {},
            cityDetails: []
    }
}
  
    //clean HTML for summary
    cleanHTML = str => str.replace(/<[^>]*>|\n|\s{2,}/g, '')
    //clean JSON data
    cleanSummary = cityScore => ({ ...cityScore, summary: this.cleanHTML(cityScore.summary) })
    //clean string for white spaces
    cleanString = str => str.replace(/\s+/g, '-').toLocaleLowerCase();

    //get names to populate chart
    getNames = () => this.state.categories.map(category => category.name)
    //get scores
    getScores = () => this.state.categories.map(category => category.score_out_of_10)
    //get colors
    getColors = () => this.state.categories.map(category => category.color)

    componentDidMount() {
      let fetch1 = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/scores/`).then(resp => resp.json())
      let fetch2 = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/scores/`).then(resp => resp.json()).then(data => this.cleanSummary(data))
      let fetch3 = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/images/`).then(resp => resp.json())
      let cityDetails = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/details/`).then(resp => resp.json())

      //setting state is asynchronous, so we have to pass a callback function that runs once set state is finished
      Promise.all([fetch1,fetch2,fetch3,cityDetails])
      .then(([data1, data2, data3, data4]) =>{
          this.setState({
              categories: data1.categories,
              summary: data2.summary,
              url: data3.photos[0].image.web,
              cityDetails: data4.categories
          }, this.getChartData)
      })
    //   this.setState({loading: true})
    //  setTimeout(() => this.setState({loading: false}), 500)
  }


  handleCheckbox = (event) =>{
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }


  getDataforPanelDetails = () =>{
    this.getCityDetails().map(data => console.log(data))
  }

  // renderCheckboxes = () =>{
  //   // <input type="checkbox"
  //   // checked = {}

  //   // ></input>
  // }



  populatePanels = () =>{
  return(
    this.state.cityDetails.map(detail => 
    <ExpansionPanel>
      <ExpansionPanelSummary>
      <Typography>{detail.label}</Typography>
    </ExpansionPanelSummary>
      <ExpansionPanelDetails>
          <Typography>
            Hello, I will be data soon...Well, if I get things right.
          </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    ))}
  


    getChartData(){
        this.setState(() => ({
          chartData:{
            labels: this.getNames(),
            datasets:[
              {
                label:'Score',
                data: this.getScores(),
                backgroundColor:this.getColors()
              }
            ]
          }
        }));
    }


    render(){
      let cityDetails = this.state.cityDetails
        return(
        <div>
          {this.state.loading ? 
                <div>
                <LinearProgress />
                </div>
                :
                <div>
          <Navbar pathname={this.props.match.path} cities={this.props.location.state.cities}/>
          <img style={{width:'100%'}} src={this.state.url}/>
          <Typography align="center" gutterBottom variant="h4">{this.props.match.params.city}</Typography>
          <Typography align="center" gutterBottom variant="body1">{this.state.summary}</Typography>
          <div className="wrapper">
            <div>
        <Chart chartData={this.state.chartData}></Chart>
            </div>
            <div>
            {this.populatePanels()}
            </div>
          </div>
        {console.log(this.state.cityDetails)}
        {cityDetails[0] ? console.log(cityDetails[0].data[0]): "Hello"}
        </div>}
        </div>
        )
    }
}