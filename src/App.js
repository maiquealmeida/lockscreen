import React, { Component, Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Login from './pages/Login';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Login />
      </Fragment>
    );
  }
}

export default App;
