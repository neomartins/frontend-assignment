import React, { useEffect } from 'react';
import { getRevenues } from '../server/Revenues';
import ChartLine from './charts/ChartLine';
import Selector from './dropdown/Selector';
import { Revenues } from './types/Types';
import Header from './utils/Header';

const Revenue = () => {

const [period, setPeriod] = React.useState('monthly');
const [selector, setSelector] = React.useState('revenue');   
const [revenues, setRevenues] = React.useState([] as Revenues[]);
const generateData = (revenues: Revenues[]) => {
    const sorted = revenues.sort((a, b) => +new Date( a.start_date ) - +new Date(b.start_date));
    const formatted = sorted.map(item => {
      const week = item.week ? { week: item.week.slice(-2) } : undefined;
      return { ...item, ...week };
    });
    setRevenues(formatted);
};

const handleSelectorSelect = (selector: string) => {
    setSelector(selector);
};

const handlePeriodSelect = (period: string) => { 
    setPeriod(period);
};
useEffect(() => {
    getRevenues(period).then((response) => {
        generateData(response.data);
    }).catch(() => "Internal server error!"); 
        
}, [period]);

    return (
    <div style={{paddingBottom: '20px'}}>
        <Header text="Revenue" />
        <Selector
            handleSelectorSelect={handleSelectorSelect}
            handlePeriodSelect={handlePeriodSelect}
            showBoth={true}
        />
        <ChartLine
            period={period === 'monthly' ? 'month' : 'week'}
            selector={selector === 'revenues' ? 'total_revenue' : 'total_margin'}
            revenueList={revenues}
            titleText={`Revenues by: ${period} ${selector}`}
        />
    </div>
    );
};

export default Revenue;