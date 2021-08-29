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
import { getInvoices } from '../../server/Invoices';
import { Invoice } from '../types/Types';
import Header from '../utils/Header';
import Selector from '../dropdown/Selector';

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
  

const InvoiceTable = () => {

    const classes = useStyles();
    const [invoice, setInvoice] = React.useState([] as Invoice[]);
    const [period, setPeriod] = React.useState('revenue');
    
    const handleSelectorSelect = (period: string) => {
      setPeriod(period);
    };

    useEffect(() => {
        getInvoices().then((response) => setInvoice(response.data))
        .catch(() => "Internal server error!");
      }, []);

    return (
    <div style={{paddingBottom: '20px'}}>
      <Header text="List of the 15 latest invoices" />
      <Selector
        handleSelectorSelect={handleSelectorSelect}
        showBoth={false}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Costumer Name</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Region</StyledTableCell>
              <StyledTableCell align="right">{ period === 'revenues' ? 'Invoice' : 'Margin'} </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoice.sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0,15).map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.customer_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">{row.region}</StyledTableCell>
                <StyledTableCell align="right">{ period === 'revenues' ? row.total_invoice : row.total_margin}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvoiceTable;
