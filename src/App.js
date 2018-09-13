import MDBDataTable from './components/Pagination'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getJson (){
      const data = require('./restaurants')
      const dataStr = JSON.stringify(data);
      const dataToStr = JSON.parse(dataStr)

      return dataToStr
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Liste des restaurants</h1>
        </header>

          <MDBDataTable
              pagination={true}
              data={this.getJson}
          />

      </div>
    );
  }
}

export default App;
