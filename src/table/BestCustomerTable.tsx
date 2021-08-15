import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TableCell,
  Typography,
} from '@material-ui/core';
import { getCustomersRevenues } from '../server/Customers';
import { Customers, Invoice } from '../types/Types';
import { getInvoices } from '../server/Invoices';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  interface BestCustomerTable {
    selector: string;
  }

const BestCustomerTable = (props: BestCustomerTable) => {
    const {
      selector,
    } = props;
    const classes = useStyles();
    const [customers, setCustomers] = React.useState([] as Customers[]);

    const fillRegionIntoCustomer = (customers: Customers[], invoices: Invoice[]) => {
      customers.slice(0,15).map((customer) => {
        let region = '';
        let invoice = invoices.filter((e) => e.customer_id === customer.customer_id);
        invoice.forEach((r) => region = region ? (region.includes(r.region) ? region.concat('') : region.concat(',').concat(r.region)) : r.region);
        customer.region = region;
      });
      setCustomers(customers);
    };
    useEffect(() => {
       getInvoices().then((invoice) => {
        getCustomersRevenues().then((response) => {
          fillRegionIntoCustomer(response.data, invoice.data);
        }).catch(() => "Internal error!");
       }).catch(() => "Internal error!"); 
       
      }, []);

    return (
    <div>
      <Typography variant="h5">{"List of our best customers"}</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Costumer Name</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Region</StyledTableCell>
              <StyledTableCell align="right">{ selector === 'revenues' ? 'Invoice' : 'Period'} </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.slice(0,15).map((row) => (
              <StyledTableRow key={row.customer_id}>
                <StyledTableCell component="th" scope="row">{row.customer_id}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.customer_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.customer_name}</StyledTableCell>
                <StyledTableCell align="right">{row.region}</StyledTableCell>
                <StyledTableCell align="right">{ selector === 'revenues' ? row.total_revenue : row.total_margin}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BestCustomerTable;
