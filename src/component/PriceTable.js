import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter,
} from 'material-ui/Table';


const styles = {
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
    color: "#000"
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
};

const tableData = [
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

class PriceTable extends Component {
  state = {
    showRowHover: false,
    stripedRows: true,
    showCheckboxes: false
  };

  getStripedStyle(index) {
    return { background: index % 2 ? '#fafafa' : 'white' };
  }

  render() {
    return (
      <Table bodyStyle={styles.table}>
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
        >
          <TableRow >
            <TableHeaderColumn colSpan="2" style={styles.tableHeader}>
              貪吃yoyo手作烘焙坊<div style={styles.tableHeaderNote}>★一包六個</div>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn style={styles.tableHeaderColumn}>口味</TableHeaderColumn>
            <TableHeaderColumn style={styles.tableHeaderColumn}>售價</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
          {tableData.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn style={styles.tableColumn}>{row.name}<span style={styles.note}><br/>{row.singlePrice}</span></TableRowColumn>
              <TableRowColumn style={styles.tableColumn}>{row.price}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default PriceTable;
