import React, { Component } from 'react';
import DatatablePage from './components/DatatablePage'
import ListRestaurant from './components/list-restaurants.component';

import data from './restaurants.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <DatatablePage/>

          {/*<table>*/}
          {/*<tr>*/}
              {/*{*/}
                  {/*data.map(function(resto){*/}
                    {/*return <td>{resto.name}</td>;*/}

                  {/*})*/}
              {/*}*/}
          {/*</tr>*/}
          {/*</table>*/}

        <div>
          <ListRestaurant />
        </div>
      </div>
    );
  }
}

export default App;
