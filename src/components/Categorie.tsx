import React, { useEffect } from 'react';
import { getCategoriesRevenues } from '../server/Categories';
import ChartBar from './charts/ChartBar';
import Selector from './dropdown/Selector';
import { Categories } from './types/Types';
import Header from './utils/Header';


const Categorie = () => {

const [categories, setCategories] = React.useState([] as Categories[]);
const [metric, setMetric] = React.useState('revenue');   
    
const handleSelectorSelect = (period: string) => {
  setMetric(period);
};

useEffect(() => {
  getCategoriesRevenues().then((response) => {
    setCategories(response.data);
  }).catch(() => "aa"); 
    
}, []);
//Best product categories
    return (
      <div style={{paddingBottom: '20px'}}>
          <Header text="Categories" />
          <Selector
            handleSelectorSelect={handleSelectorSelect}
            showBoth={false}
          />
          <ChartBar 
            metric={metric === 'revenues' ? 'total_revenue' : 'total_margin'}
            argumentField={'category_name'}
            titleText={`Best product categories by: ${metric}`}
            categories={categories}
        />
      </div>
    );
};

export default Categorie;