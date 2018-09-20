import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import Header from './components/header.component';
import ListRestaurant from './components/list-restaurants.component';
import RestaurantsMap from './components/restaurantsMap.component';
import SignUp from './components/signUp.component';
import Login from './components/Login.component'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import data from './restaurants.json'
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      area: "",
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
        console.log('fetch', this.state.restaurants)
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
    if (a === "Tous") {
      this.setState({
        area: this.state.restaurants
      })
    }
    this.setState({
      area: a
    })
    // const restaurantFiltered = this.state.restaurants.filter(area => area.address2 === a)
    // this.setState({
    //   dataFiltered: restaurantFiltered
    // })
    // const restaurants = this.state.restaurants;
    // if (a === "Tous") {
    //   this.setState({
    //     dataFiltered: restaurants
    //   })
    // }
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

        <Navbar area={this.areaFilter} filteredRestaurants={this.lambda} restaurants={this.state.restaurants} />
        <Header />

        <Router>
          <div>
            <Route exact path="/"
              render={props => {
                return <ListRestaurant restaurants={this.state.restaurants} area={this.state.area} search={this.state.search} {...props} />
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
            {/* <button onClick={this.getUsers}>GET USERS</button> */}
            <SignUp user={this.state.users} />
            <Login user={this.state.users} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
