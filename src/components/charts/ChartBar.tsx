import React from 'react';
import { Paper,} from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { Categories } from '../types/Types';

interface ChartBarProps {
  metric: string;
  categories: Categories[];
  titleText: string;
  argumentField: string;
}

const ChartBar = (props: ChartBarProps) => {
const {
  metric,
  categories,
  titleText,
  argumentField,
} = props;

return (
  <div>
    <Paper>
      <Chart
        data={categories}
        rotated
      >
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries
          color={'#6495ED'}
          valueField={metric}
          argumentField={argumentField}
        /> 
        <Title text={titleText} />
      </Chart>
    </Paper>
  </div>
    );
};

export default ChartBar;