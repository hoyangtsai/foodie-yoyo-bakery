import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PriceTable from './component/PriceTable';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <PriceTable />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('.wrapper'));