import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';


export default class Doughnut extends PureComponent {

  render() {
    const data = this.props.data
  
    const COLORS = ['#29b6f6','#e57373'];
    
    return (
      <PieChart width={350} height={400}>
        <Pie
        label={true}
        labelLine={true}
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={false}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}





