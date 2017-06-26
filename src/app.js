import React from 'react';
import ReactDOM from 'react-dom';

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
    name: '南瓜饅頭 季節限定',
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

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  getStripedStyle(index) {
    return { background: index % 2 ? '#DFEBFF' : 'white' };
  }

  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
             <thead>
              <tr>
                <th>口味</th>
                <th>售價</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map( (row, index) => (
                <tr style={{ ...styles.tableColumn, ...this.getStripedStyle(index) }}>
                  <td>{row.name}<span style={styles.note}><br/>{row.singlePrice}</span></td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('.wrapper'));
