import React  from 'react';
import { Paper } from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import { Revenues } from '../types/Types';

interface ChartLineProps {
  period: string;
  selector: string;
  revenueList: Revenues[];
  titleText: string;
}

const ChartLine = (props: ChartLineProps) => {
    const {
      period,
      selector,
      revenueList,
      titleText,
    } = props;

    return (
        <Paper>
          <Chart data={revenueList}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries
              color={'#6495ED'}
              valueField={selector}
              argumentField={period}
            />
            <Title text={titleText} />
          </Chart>
        </Paper>
    );
};

export default ChartLine;