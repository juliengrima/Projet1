import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import Header from './components/header.component';
import ListRestaurant from './components/list-restaurants.component';
import RestaurantsMap from './components/restaurantsMap.component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import data from './restaurants.json'
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      dataFiltered: []
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
          restaurants: data,
          dataFiltered: data
        })
        console.log(this.state.restaurants)
      })
  }

  areaFilter = (a) => {
    const restaurantFiltered = this.state.restaurants.filter(area => area.address2 === a)
    this.setState({
      dataFiltered: restaurantFiltered
    })
    const restaurants = this.state.restaurants;
    if (a === "Tous") {
      this.setState({
        dataFiltered: restaurants
      })
    }
  }

  render() {
    return (
      <div className="App">

        <Navbar area={this.areaFilter} />
        <Header />

        <Router>
          <div>
            <Route exact path="/"
              render={props => {
                return <ListRestaurant restaurants={this.state.dataFiltered} {...props} />
              }}
            />
            <Route
              path="/map"
              render={props => {
                return <RestaurantsMap
                  restaurants={this.state.dataFiltered}
                  googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `600px`, width: `600px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  {...props}
                />
              }}
            />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
