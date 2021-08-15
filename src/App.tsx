import React, { useEffect } from 'react';
import './App.css';
import InvoiceTable from './table/InvoiceTable';
import BestCustomerTable from './table/BestCustomerTable';
import ChartLine from './charts/ChartLine';
import ChartBar from './charts/ChartBar';
import DropdownPeriod from './dropdown/DropdownPeriod'
import {
  Container, makeStyles, useMediaQuery, useTheme,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
  },
  container: {
    flexWrap: 'wrap',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, auto))',
    gridGap: '15px',
  },
  link: {
    color: theme.palette.primary.light,
  },
}));


function App() {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  const [period, setPeriod] = React.useState('monthly');
  const [selector, setSelector ] = React.useState('revenues');

  const handlePeriod = (period: string) => {
    setPeriod(period);
  };

  const handleSelector = (selector: string) => {
    setSelector(selector);
  };


  return (
    <Container maxWidth="xl" disableGutters={isSmallScreen}>
      <div>
          <DropdownPeriod
            handlePeriodSelect={handlePeriod}
            handleSelectorSelect={handleSelector}
          />
        </div>
      <div className={classes.container}>
        <div>
          <InvoiceTable 
            selector={selector}
          />
          <ChartBar 
            selector={selector}
          />
        </div>
        <div>
          <BestCustomerTable 
            selector={selector}
          />
          <ChartLine 
            period={period}
            selector={selector}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
