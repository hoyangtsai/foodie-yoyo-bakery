import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  TableFooter,
  Paper,
} from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    overflowX: 'auto',
    minWidth: '480px'
  },
  tableHeader: {
    fontSize: '22px',
    textAlign: 'center'
  },
  tableHeaderNote: {
    fontSize: '12px',
    textAlign: 'right',
    color: '#000'
  },
  tableHeaderColumn: {
    fontSize: '16px'
  },
  tableColumn: {
    fontSize: '18px'
  },
  tableFooter: {
    textAlign: 'right',
    padding: '0',
    height: 'inherit'
  },
  note: {
    fontSize: '14px'
  }
});

const rows = [
  {
    name: '原味饅頭',
    singlePrice: '12 元/個',
    price: '72 元/包'
  },
  {
    name: '南瓜饅頭',
    singlePrice: '15 元/個',
    price: '90 元/包'
  },
  {
    name: '黑芝麻卷饅頭',
    singlePrice: '15 元/個',
    price: '90 元/包'
  },
  {
    name: '蔥花卷饅頭',
    singlePrice: '15 元/個',
    price: '90 元/包'
  },
  {
    name: '全麥饅頭',
    singlePrice: '15 元/個',
    price: '90 元/包'
  },
  {
    name: '黑糖饅頭',
    singlePrice: '12 元/個',
    price: '72 元/包'
  },
  {
    name: '堅果全麥饅頭',
    singlePrice: '20 元/個',
    price: '120 元/包'
  }
];

export default function PriceTable() {
  const classes = useStyles();

  // state = {
  //   showRowHover: false,
  //   stripedRows: true,
  //   showCheckboxes: false
  // };

  // getStripedStyle(index) {
  //   return { background: index % 2 ? '#fafafa' : 'white' };
  // }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="price table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderColumn}>口味</TableCell>
            <TableCell className={classes.tableHeaderColumn} align="right">售價</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableColumn}>{row.name}<span className={classes.note}><br/>{row.singlePrice}</span></TableCell>
              <TableCell className={classes.tableColumn}>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
