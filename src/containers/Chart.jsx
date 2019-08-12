import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const Chart = (props) =>{
    return (
      <div className="chart">
        <HorizontalBar
          data={props.chartData}
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
              text: "Life Quality Score",
              fontSize:25
            },
            legend:{
              display:true,
            }
          }}
        />
      </div>
    )
  }

export default Chart;