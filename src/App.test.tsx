import React from 'react';
import { render, screen } from '@testing-library/react';
import InvoiceTable from '../src/components/table/InvoiceTable';
import BestCustomerTable from '../src/components/table/BestCustomerTable';

test('renders learn react link', () => {
  render(<InvoiceTable />);
  const linkElement = screen.getByText(/List of the 15 latest invoices/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<BestCustomerTable />);
  const linkElement = screen.getByText(/List of our best customers/i);
  expect(linkElement).toBeInTheDocument();
});

