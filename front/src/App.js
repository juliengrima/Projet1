import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar.component';
import Header from './components/header.component';
import ListRestaurant from './components/list-restaurants.component';
import RestaurantsMap from './components/restaurantsMap.component';
import Favorites from './components/favorites.component';
import { Router, Route, withRouter } from "react-router-dom";

// import data from './restaurants.json'
// import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      areaSearch: "",
      search: [],
      users: [],
    }
  }

  componentDidMount() {
    this.getRestaurants();
    this.getUsers();
  }

  getRestaurants = () => {
    const url = "http://localhost:3000/restaurants"
    fetch(url)
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({
          restaurants: data,
        })
        // console.log('fetch', this.state.restaurants)
      })
  }

  getUsers = () => {
    const url = "http://localhost:3000/users/"
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          users: data
        })
        // console.log(this.state.users)
      })
  }

  areaFilter = (a) => {
    // if (a === "Tous") {
    //   this.setState({
    //     area: this.state.restaurants
    //   })
    // }
    this.setState({
      area: a
    })
    // const restaurantFiltered = this.state.restaurants.filter(area => area.address2 === a)
    // this.setState({
    //   dataFiltered: restaurantFiltered
    // })
    const restaurants = this.state.restaurants;
    if (a === "Tous") {
      this.setState({
        restaurants: restaurants
      })
    }
  }

  lambda = (search) => {
    const regex = new RegExp(search, 'i')
    // const searchedRestaurants = this.state.dataFiltered.filter(restaurant => restaurant.name.match(regex))
    this.setState({
      search: regex
    })
    // console.log(searchedRestaurants);
    // this.setState({
    //   dataFiltered: searchedRestaurants
    // })
    // console.log(this.state.dataFiltered);
  }


  render() {
    return (
      <div className="App">
        <Navbar filteredRestaurants={this.lambda} />
        <Header />
        <Route exact path="/"
          render={props => {
            return <ListRestaurant area={this.areaFilter} restaurants={this.state.restaurants} areaSearch={this.state.area} search={this.state.search} {...props} />
          }}
        />
        <Route
          path="/map"
          render={props => {
            return <RestaurantsMap
              restaurants={this.state.restaurants}
              googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              {...props}
            />
          }}
        />
        <Route path="/favorites"
          render={props => {
            return <Favorites {...props} />
          }}
        />
      </div >
    );
  }
}

export default withRouter(App);
