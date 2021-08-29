import React from 'react';
import Categorie from './Categorie';
import Revenue from './Revenue';
import BestCustomerTable from './table/BestCustomerTable';
import InvoiceTable from './table/InvoiceTable';

const Dashboard = () => {

  return (
    <div>
      <InvoiceTable />
      <BestCustomerTable />
      <Categorie/>
      <Revenue/>
    </div>
  );
};

export default Dashboard;


