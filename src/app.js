import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Table } from 'reactstrap';

import './style/index.scss';

const styles = {
  tableHeader: {
    fontSize: '24px',
    textAlign: 'center',
    letterSpacing: '6px',
    marginBottom: '12px'
  },
  tableHeaderNote: {
    fontSize: '12px',
    textAlign: 'right',
    marginBottom: '6px'
  },
  tableColumn: {
    fontSize: '18px'
  },
  singlePrice: {
    fontSize: '14px'
  },
  note: {
    fontSize: '12px',
    color: '#f00'
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
    price: '90 元/包',
    note: '季節限定'
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

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  getStripedStyle(index) {
    return { background: index % 2 ? '#DFEBFF' : 'white' };
  }

  render() {
    return (
      <Container>
        <div style={styles.tableHeader}>貪吃yoyo手做烘焙坊</div>
        <div style={styles.tableHeaderNote}>★一包六個</div>
        <Table responsive bordered>
           <thead>
            <tr>
              <th>口味</th>
              <th>售價</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr style={{ ...styles.tableColumn, ...this.getStripedStyle(index) }}>
                <td>
                  {row.name} {
                    (row.note) ? <span style={styles.note}>{row.note}</span> : ''
                  }
                  <br/><span style={styles.singlePrice}>{row.singlePrice}</span>
                </td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="ingd-img"><img src="./images/ingd.png"/></div>
      </Container>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('.wrapper'));
