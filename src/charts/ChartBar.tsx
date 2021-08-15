import React, { useEffect } from 'react';
import { Paper, Typography, } from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import { getCategoriesRevenues } from '../server/Categories';
import { Categories } from '../types/Types';

interface ChartBarProps {
  selector: string;
}

const ChartBar = (props: ChartBarProps) => {
  const {
    selector,
  } = props;

const [categories, setCategories] = React.useState([] as Categories[]);
useEffect(() => {
  getCategoriesRevenues().then((response) => {
    setCategories(response.data);
  }).catch(() => "aa"); 
    
}, []);

return (
  <div>
    <Typography variant="h5">{"Total revenues per products categories"}</Typography>
    <Paper>
      <Chart
        data={categories}
      >
        <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
            <ValueAxis />

            <BarSeries
              valueField={selector === 'revenues' ? "total_revenue": "total_margin"}
              argumentField="category_name"
              name="Category Name"
            />   
          <Stack />
      </Chart>
    </Paper>
  </div>
    );
};

export default ChartBar;