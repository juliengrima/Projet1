import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ListRestaurant from './components/list-restaurants.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ListRestaurant />
      </div>
    );
  }
}

export default App;
