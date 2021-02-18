import React from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PriceTable from './component/PriceTable';
import './index.scss';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const titleStyle = {
      fontSize: '24px',
      textAlign: 'center',
      letterSpacing: '6px',
      marginBottom: '12px',
    };

    const noteStyle = {
      fontSzie: '12px',
      textAlign: 'right',
      marginBottom: '6px',
    };

    return (
      <div className="container">
        <div style={titleStyle}>貪吃yoyo手做烘焙坊</div>
        <div style={noteStyle}>★一包六個</div>
        <div>
          <PriceTable />
        </div>
        <div className="ingd-img"></div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('.wrapper'));
