import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ListRestaurant from './components/list-restaurants.component';
import RestaurantsMap from './components/restaurantsMap.component';
// import data from './restaurants.json'
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    const url = "http://localhost:3000/restaurants"
    fetch(url)
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({
          restaurants: data
        })
        console.log(this.state.restaurants)
      })
  }

  render() {
    return (
      <div className="App">

        <Navbar />

        <ListRestaurant restaurants={this.state.restaurants} />

        <RestaurantsMap
          restaurants={this.state.restaurants}
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
