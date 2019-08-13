import React from 'react';
import {HorizontalBar, Radar} from 'react-chartjs-2';
import { height } from '@material-ui/system';

const Chart = (props) =>{
    return (
      <div className="chart">
        <HorizontalBar
          data={props.chartData}
          width={700}
          height={700}
          options={{
              scales:{
                xAxes:
                  [{
                    ticks:{
                      beginAtZero:true
                    }
                  }]
            },
            maintainAspectRatio:true,
            title:{
              display:true,
              text: props.path === "/compare/:cityA/:cityB/" ? "Cost of Living Comparison" : "Life Quality Score",
              fontSize:25
            },
            legend:{
              display:false,
            },
            responsive:false,
          }}
        />
      </div>
    )
  }

export default Chart;