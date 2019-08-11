import React from 'react';
import Container from '@material-ui/core/Container';
import Chart from '../containers/Chart'
import Navbar from '../containers/Navbar'
import LinearProgress from '@material-ui/core/LinearProgress';

export default class CityPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categories: [],
            summary: "",
            url: "",
            chartData: {}
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
    

    
    componentDidMount() {
        let fetch1 = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/scores/`).then(resp => resp.json())
        let fetch2 = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/scores/`).then(resp => resp.json()).then(data => this.cleanSummary(data))
        let fetch3 = fetch(`https://api.teleport.org/api/urban_areas/slug:${this.cleanString(this.props.match.params.city)}/images/`).then(resp => resp.json())

        //setting state is asynchronous, so we have to pass a callback function that runs once set state is finished
        Promise.all([fetch1,fetch2,fetch3])
        .then(([data1, data2, data3]) =>{
            this.setState({
                categories: data1.categories,
                summary: data2.summary,
                url: data3.photos[0].image.web
            }, this.getChartData)
        })
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
          <Navbar pathname={this.props.match.path} cities={this.props.location.state.cities}/>
          <img src={this.state.url}/>
          <h1>{this.props.match.params.city}</h1>
        {this.state.summary}
        <Chart chartData={this.state.chartData}></Chart>
        </div>}
        </div>
        )
    }
}