import React, { useEffect } from 'react';
import { Paper, Typography, } from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';

import { getRevenues } from '../server/Revenues';
import { ChartLines, Revenues } from '../types/Types';


interface ChartLineTable {
  period: string;
  selector: string;
}

const ChartLine = (props: ChartLineTable) => {
    const {
      period,
      selector,
    } = props;
    const [chartRevenue, setChartRevenues] = React.useState([] as ChartLines[]);

    const generateData = (revenues: Revenues[]) => {
        const chartRevenueList: { x: Date; y: number; }[] = [];
        const chartMarginList: { x: Date; y: number; }[] = [];
        let totalRevenue = 0;
        let totalMargin = 0;
        revenues.sort((a, b) => period === 'monthly' ?  +new Date( a.month ) - +new Date(b.month) :  +new Date( a.week ) - +new Date(b.week) ).map((r) => {

            totalRevenue = totalRevenue !== 0 ? totalRevenue + r.total_revenue : r.total_revenue;
            chartRevenueList.push({ x: period === 'monthly' ? r.month : r.week, y: totalRevenue});

            totalMargin = totalMargin !== 0 ? totalMargin + r.total_margin : r.total_margin;
            chartMarginList.push({ x:period === 'monthly' ? r.month : r.week, y: totalMargin});

        });

       if( selector === 'revenues'){
        setChartRevenues(chartRevenueList);
       } else {
        setChartRevenues(chartMarginList);
       }
       console.log(chartRevenueList);
    };

    useEffect(() => {
    getRevenues(period).then((response) => {
        generateData(response.data);
    }).catch(() => "Internal server error!"); 
        
    }, [period, selector]);

    return (
      <div>
        <Typography variant="h5">{"Monthly cumulative invoices revenues"}</Typography>
        <Paper>
          <Chart data={chartRevenue}>
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="y" argumentField="x" />
            <ZoomAndPan />
          </Chart>
        </Paper>
    </div>
    );
};

export default ChartLine;