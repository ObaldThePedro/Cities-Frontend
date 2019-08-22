import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';


export default class Rad extends PureComponent {

  render() {
    const data = [
      {
        subject: 'Housing', A: this.props.dataA[0].score_out_of_10, B: this.props.dataB[0].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Cost of Living', A: this.props.dataA[1].score_out_of_10, B: this.props.dataB[1].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Commute', A: this.props.dataA[5].score_out_of_10, B: this.props.dataB[5].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Safety', A: this.props.dataA[7].score_out_of_10, B: this.props.dataB[7].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Healthcare', A: this.props.dataA[8].score_out_of_10, B: this.props.dataB[8].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Education', A: this.props.dataA[9].score_out_of_10, B: this.props.dataB[9].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Environment', A: this.props.dataA[10].score_out_of_10, B: this.props.dataB[10].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Economy', A: this.props.dataA[11].score_out_of_10, B: this.props.dataB[11].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Leisure & Culture',A: this.props.dataA[14].score_out_of_10, B: this.props.dataB[14].score_out_of_10, fullMark: 10,
      },
      {
        subject: 'Outdoors', A: this.props.dataA[16].score_out_of_10, B: this.props.dataB[16].score_out_of_10, fullMark: 10,
      },
    ];
    return (
      <ResponsiveContainer width='100%' height={500}>
      <RadarChart cx={300} cy={250} outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar legendType="circle" name={this.props.cityA} dataKey="A" stroke="#29b6f6" fill="#29b6f6" fillOpacity={0.4} />
        <Radar legendType="triangle" name={this.props.cityB} dataKey="B" stroke="#e57373" fill="#e57373" fillOpacity={0.4} />
        <Legend />
      </RadarChart>
      </ResponsiveContainer>
    );
  }
}
