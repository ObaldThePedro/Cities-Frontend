import React from "react";
import Chart from "../containers/Chart";
import Navbar from "../containers/Navbar";
import Select from "@material-ui/core/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faArrowUp,
  faArrowDown,
  faEquals,
  faDollarSign,
  faMale
} from "@fortawesome/free-solid-svg-icons";
import { CATEGORY_IDS, DATA_IDS, DATA_SECTIONS } from "../data_constants";
import Doughnut from '../containers/Doughnut'
import Rad from '../containers/Rad'
import Tab from '../containers/TabComponent'
import JobSalariesChart from "../containers/JobSalariesChart";
import HorizonBar from "../containers/HorizonBar";
import Table from '../containers/ComparisonTable'
import ComparisonTable from "../containers/ComparisonTable";



const getValueType = (data) => {
  if (data.float_value !== undefined) return 'float_value'
  if (data.currency_dollar_value !== undefined) return 'currency_dollar_value'
  if (data.percent_value !== undefined) return 'percent_value'
  if (data.string_value !== undefined) return 'string_value'
  if (data.int_value !== undefined) return 'int_value'
}

const parseCategoryData = (cityAdata, otherCityData) => (category, catIndex) => {
  return {
    ...category,
    data: category.data
      .filter(data => DATA_IDS.includes(data.id))
      .map((data, dataIndex) => {
        const otherCityDataFiltered = otherCityData.categories.filter(category => !!cityAdata.categories.find(c => c.id === category.id))
        const catInOtherCity = otherCityDataFiltered.find(c => c.id === category.id)
        const cityAcategories = cityAdata.categories.map(z => z.data)
        const filterdataInOtherCity = catInOtherCity.data.filter(d => d.id === cityAcategories.find(d => d.id === data.id))
        const dataInOtherCity = catInOtherCity.data.find(d => d.id === data.id)
        const valueType = getValueType(data)

        return {
          ...data,
          difference: dataInOtherCity ? data[valueType] - dataInOtherCity[valueType] : 0
        }
      })
  };
}


export default class CompareCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartAdata: [],
      chartBdata: [],
      cityADetails: [],
      cityBDetails: [],
      cityASummary: "",
      cityAUrl: "",
      cityBSummary: "",
      cityBUrl: "",
      joined_categories: [],
      cityASalary: [],
      cityBSalary: [],
      selectedJob: "Compare Job Salaries",
      cityABusiness: [],
      cityBBusiness: [],
      activeTab: 0
    };
  }

  
  //clean HTML for summary
  cleanHTML = str => str.replace(/<[^>]*>|\n|\s{2,}/g, "");
  //clean JSON data
  cleanSummary = cityScore => ({
    ...cityScore,
    summary: this.cleanHTML(cityScore.summary)
  });
  //clean string for white spaces
  cleanString = str => str.replace(/\s+/g, "-").toLocaleLowerCase();

  componentDidMount() {
    //fetch data for city A
    let fetch1 = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[0]
      )}/scores/`
    ).then(resp => resp.json());
    let fetch2 = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[0]
      )}/scores/`
    )
      .then(resp => resp.json())
      .then(data => this.cleanSummary(data));
    let fetch3 = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[0]
      )}/images/`
    ).then(resp => resp.json());
    let cityASalary = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[0]
      )}/salaries/`
    ).then(resp => resp.json());
    let cityADetails = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[0]
      )}/details/`
    ).then(resp => resp.json());

    //fetch data for city B
    let fetch4 = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[1]
      )}/scores/`
    ).then(resp => resp.json());
    let fetch5 = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[1]
      )}/scores/`
    )
      .then(resp => resp.json())
      .then(data => this.cleanSummary(data));
    let fetch6 = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[1]
      )}/images/`
    ).then(resp => resp.json());
    let cityBSalary = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[1]
      )}/salaries/`
    ).then(resp => resp.json());
    let cityBDetails = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.cleanString(
        this.props.location.state.cities[1]
      )}/details/`
    ).then(resp => resp.json());

    Promise.all([
      fetch1,
      fetch2,
      fetch3,
      cityASalary,
      cityADetails,
      cityBDetails,
      cityBSalary,
      fetch4,
      fetch5,
      fetch6
    ]).then(
      ([
        data1,
        data2,
        data3,
        cityASalary,
        cityAdata,
        cityBdata,
        cityBSalary,
        data4,
        data5,
        data6
      ]) =>
        this.setState(
          {
            cityAranking: data1.teleport_city_score,
            cityBranking: data4.teleport_city_score,
            chartAdata: data1.categories,
            chartBdata: data4.categories,
            cityASummary: data2.summary,
            cityBSummary: data5.summary,
            cityAUrl: data3.photos[0].image.web,
            cityBUrl: data6.photos[0].image.web,
            cityASalary: cityASalary.salaries,
            cityBSalary: cityBSalary.salaries,
            cityADetails: cityAdata.categories
              .filter(category => CATEGORY_IDS.includes(category.id))
              .map(parseCategoryData(cityAdata,cityBdata)),
            cityBDetails: cityBdata.categories
              .filter(category => CATEGORY_IDS.includes(category.id))
              .map(parseCategoryData(cityBdata,cityAdata))
          }
        )
    );

    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 2000);
  }


  handleDropDown = (e) =>{
    this.setState({selectedJob: e.target.value})
  }


  getPopulation = (city) =>{
    let cityData = {}
    return city[1] ?
    !!city[1].data[0] ?
       cityData = city[1].data.find(population => population.id === "POPULATION-SIZE").float_value : cityData = 0 
      : null
}

  extractPopulation = (cityA,cityB) =>{
    let data = []
    data.push({name: "CityA", value: this.getPopulation(cityA)})
    data.push({name: "CityB", value: this.getPopulation(cityB)})
    return data
  }

  // getHousingCosts = (cityA,cityB) =>{
  //   let cityData = []
  //   {
  //     return city[6] ?
  //     cityData = city[6].data.find()
  //   }
  // }

  getGDP = (city) =>{
    let cityData = 0
      return city[4] ?
      !!city[4].data[0] ?
      cityData = city[4].data.find(gdp => gdp.id === "GDP-PER-CAPITA").currency_dollar_value : cityData = 0
      : null
  }

  extractGDP = (cityA, cityB) =>{
    let data = []
    data.push({name: "CityA", value: this.getGDP(cityA)})
    data.push({name: "CityB", value: this.getGDP(cityB)})
    return data
  }


  getLifeExpectancy = (city) =>{
    let cityData = 0
      return (city[5] ? 
        !!city[5].data[0] ? 
        cityData = city[5].data[0].float_value 
        : cityData = 0 
      : null)
    
  }

  extractLifeExpectancy = (cityA, cityB) =>{
    const object1 = {
      key: "Life expectancy", value: this.getLifeExpectancy(cityA)
    }

    const object2 ={
      key: "Life expectancy", value: this.getLifeExpectancy(cityB)
    }

    return [object1, object2]
  }



   toObject = (arr) =>{
    let new_array = []
    for (var i = 0; i < arr.length; i++){
        new_array.push({key: arr[i].label, difference:arr[i].difference, value: arr[i].float_value ? parseFloat(arr[i].float_value).toFixed(2) : arr[i].int_value ? parseInt(arr[i].int_value) : arr[i].percent_value ? parseFloat(arr[i].percent_value).toFixed(3) : arr[i].string_value ? arr[i].string_value : arr[i].currency_dollar_value})
    }
    return new_array;
  }

  getArrays = (city, index) =>{
    return city[index] ?
    city[index].data : null
  }

  getPositiveScores = (city,index) =>{
    return this.getArrays(city,index) ?
    this.getArrays(city, index).filter(object => object.difference > 0): null
  }

  getPositiveObjects = (city,index) =>{
    return this.getPositiveScores(city,index) ?
    this.toObject(this.getPositiveScores(city, index)) : null
  }

  getNegativeScores = (city,index) =>{
    return this.getArrays(city,index) ?
    this.getArrays(city, index).filter(object => object.difference < 0): null
  }


  getNegativeObjects = (city,index) =>{
    return this.getNegativeScores(city,index) ?
    this.toObject(this.getNegativeScores(city, index)) : null
  }


  //Job titles match on both city arrays.
  getJobTitles = () =>
    this.state.cityASalary.map(job => (
      <option key={job.job.id}>{job.job.title}</option>
    ));

  //Get matching job upon selection on dropdown
  getMatchingJob = city =>
    city.filter(job => job.job.title.includes(this.state.selectedJob));

  //Get matching job salary when job is selected
  getMatchingJobSalary = city =>
    this.getMatchingJob(city).map(job => job.salary_percentiles.percentile_50);

  getAllSalaries = city =>
    city.map(job => parseFloat(job.salary_percentiles.percentile_50));

  calculateAverageSalary = city => {
    let salaries_array_length = this.getAllSalaries(city).length;
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < salaries_array_length; i++) {
      sum += this.getAllSalaries(city)[i];
    }
    avg = sum / salaries_array_length;
    return avg;
  };

  getBusinessLabelsA = (index, city = "cityA") => {
    let even_labels = [];
    for (
      let i = 0;
      i < this.state[city + "Details"][index].data.length;
      i += 2
    ) {
      even_labels.push({
        key: this.state.cityADetails[index].data[i].label.toString(),
        value: this.state.cityADetails[index].data[i].float_value
      });
    }
    return even_labels;
  };

  getBusinessLabelsB = index => {
    let even_labels = [];
    for (let i = 0; i < this.state.cityBDetails[index].data.length; i += 2) {
      even_labels.push({
        key: this.state.cityBDetails[index].data[i].label.toString(),
        value: this.state.cityBDetails[index].data[i].float_value
      });
    }
    return even_labels;
  };


  // renderClimateData = (city, index) => {
  //   const cityKey = city === "a" ? "cityADetails" : "cityBDetails";
  //   return this.state[cityKey][index]
    
  //     ? this.state[cityKey][index].data.map(data => (
  //         <p>
  //           {data.label} : {data.float_value}{" "}
  //           <FontAwesomeIcon
  //             color={data.difference > 0 ? "green" : "red"}
  //             icon={data.difference > 0 ? faArrowUp : faArrowDown}
  //           />{" "}
  //           {data.difference}
  //         </p>
  //       ))
  //     : this.state[cityKey][index];
  // };





  renderData = (dataId, city) =>{
    const cityKey = city === "a" ? "cityADetails" : "cityBDetails";
    const category = this.state[cityKey].find(c => c.id === dataId)
    return <ComparisonTable></ComparisonTable>
  }

  renderData = (dataId, city) => {
    const cityKey = city === "a" ? "cityADetails" : "cityBDetails";
    const category = this.state[cityKey].find(c => c.id === dataId)
    return category
      ?
       category.data.map(data => (
          <p>
            {data.label} : {data.float_value ? data.float_value : 
            (data.percent_value ? parseFloat(data.percent_value).toFixed(2) : data.string_value ? data.string_value : data.currency_dollar_value ? data.currency_dollar_value : data.int_value)}{" "}
            {data.difference > 0 || data.difference <= 0 ?
            <FontAwesomeIcon
              color={data.difference > 0 ? 'green' : data.difference < 0 ? 'red' : 'black'}
              icon={data.difference > 0 ? faArrowUp : data.difference < 0 ? faArrowDown : faEquals }
            /> : null} {data.difference ? parseFloat(data.difference).toFixed(2) : ""}
          </p>
        ))
      : null;
  }



  render() {

    let parsedAverageSalaryCityA = parseInt(
      this.calculateAverageSalary(this.state.cityASalary)
    );
    let parsedAverageSalaryCityB = parseInt(
      this.calculateAverageSalary(this.state.cityBSalary)
    );
    let parsedJobSalaryCityA = parseInt(
      this.getMatchingJobSalary(this.state.cityASalary)
    );
    let parsedJobSalaryCityB = parseInt(
      this.getMatchingJobSalary(this.state.cityBSalary)
    );

    let renderSalaries = (index, citySalary) => {
      return (
        citySalary
      );
    };

    let renderJobSalaries = (index, citySalary) => {
      if (this.state.selectedJob === "Compare Job Salaries") {
        return "";
      } else {
        return (
            citySalary
        );
      }
    };

    const jobs = this.getJobTitles();
    return (
      <React.Fragment>
        <Navbar
          pathname={this.props.location.pathname}
          cities={this.props.location.state.cities}
        />
        <div className="description2-wrapper">
          <h1 className="description2">Compare Cities</h1>
        </div>

        <div class="compared-cities-wrapper">
          <div className="card"  style={{borderTop:'solid #29b6f6 4px'}}>
          <div class="ui white circular label">{parseFloat(this.state.cityAranking).toFixed(1)}</div>
            <img src={this.state.cityAUrl} alt={this.props.location.state.cities[0]} style={{width:'100%'}}/>
            <div class="container">
            <h2 className="city"><b>{this.props.location.state.cities[0]}</b></h2> 
             <p>{this.state.cityASummary}</p> 
            </div>
          </div>

          <div className="card" style={{borderTop:'solid #e57373 4px'}}>
            <div class="ui white circular label">{parseFloat(this.state.cityBranking).toFixed(1)}</div>
              <img src={this.state.cityBUrl} alt={this.props.location.state.cities[1]} style={{width:'100%'}}/>
              <div class="container">
              <h2 className="city"><b>{this.props.location.state.cities[1]}</b></h2> 
              <p>{this.state.cityBSummary}</p> 
            </div>
          </div>
        </div>
        <div className="radar-wrapper">
          <div>
            {this.state.chartAdata[0] && this.state.chartBdata[0] ?
            <Rad cityA={this.props.location.state.cities[0]} cityB={this.props.location.state.cities[1]} dataA={this.state.chartAdata} dataB={this.state.chartBdata}></Rad> : null}
          </div>
          <div className="right-div-salary">
            <h3 className="how-compares">How does {this.props.location.state.cities[0]} compare to {this.props.location.state.cities[1]}?</h3>
          <Tab getPositiveObjects={this.getPositiveObjects} getNegativeObjects={this.getNegativeObjects} cityAdetails={this.state.cityADetails} cityBdetails={this.state.cityBDetails} cityA={this.props.location.state.cities[0]} cityB={this.props.location.state.cities[1]}></Tab>
          </div>
        </div>
          

        <div className="salaries-dropdown">
          <Select
            value={this.state.selectedJob}
            onChange={this.handleDropDown}
            native>
            <option selected disabled>
              Compare Job Salaries
            </option>
            {jobs}
          </Select>
        </div>

        <div className="compared-cities-wrapper">
          <div className="jobs">
            <h3 className="average-salary">Average Salary (USD)</h3>
            <JobSalariesChart cityA={this.props.location.state.cities[0]} cityB={this.props.location.state.cities[1]} salaryA={renderSalaries(0, parsedAverageSalaryCityA)} salaryB={renderSalaries(1, parsedAverageSalaryCityB)}></JobSalariesChart>
            </div>
            <div className="jobs">
            {this.state.selectedJob === "Compare Job Salaries" ? null :
            <div>
            <h3 className="average-salary">{this.state.selectedJob} (USD)</h3>
           <JobSalariesChart cityA={this.props.location.state.cities[0]} cityB={this.props.location.state.cities[1]} salaryA={renderJobSalaries(0, parsedJobSalaryCityA)} salaryB={renderJobSalaries(1,parsedJobSalaryCityB)}></JobSalariesChart>
           </div>}
            </div>
          </div>
          <HorizonBar></HorizonBar>
          
        {DATA_SECTIONS.map(section => {
          return (
            <>
                <div className="attribute-title">
                  <h1>{section.label}</h1>
                </div>
              <div className="wrapper">
                <div className="attributes">{this.renderData(section.id, 'a')}</div>
              <div>
                <div className="attributes2">{this.renderData(section.id, 'b')}</div>
              </div>
              </div>
            </>
          );
        })}
        </React.Fragment>
        /* <div>
            <Doughnut className="Dough" data={this.extractPopulation(this.state.cityADetails, this.state.cityBDetails)}></Doughnut>
          </div>

          <div>
            <Doughnut className="Dough" data={this.extractGDP(this.state.cityADetails, this.state.cityBDetails)}></Doughnut>
          </div>
          <div>
          {this.getPopulation(this.state.cityADetails) === 0 ||  this.getPopulation(this.state.cityBDetails) === 0 || this.getGDP(this.state.cityADetails) === 0 || this.getGDP(this.state.cityBDetails) === 0 ? 
          <p>Note: Values of 0 mean that data is not available</p> : "" }
        </div> */
        /* <div className="chartWrapper">
          <Chart
            path={this.props.match.path}
            chartData={this.state.chartData}
          />
        </div> */
    );
  }
}
