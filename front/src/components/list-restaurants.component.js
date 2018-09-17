import React, { Component } from 'react';
import './list-restaurant.css';
class ListRestaurant extends Component {
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

  renderRestaurantsList() {
    const restaurantsList = this.state.restaurants.map((restaurant, i) =>
      <div key={i}>
        <h1>
          Nom: {restaurant.name}
        </h1>
        <img className="image" src={restaurant.image} />
        <p>Adresse: {restaurant.address1} {restaurant.address2}</p>
        <p className="note">Note: {restaurant.note}/10</p>
        <a href={restaurant.to_website} target="_blank">Lien vers le site</a>
      </div>
    )
    return <div>{restaurantsList}</div>
  }

  render() {
    return (
      <div>
        {this.renderRestaurantsList()}
      </div>
    )
  }
}

export default ListRestaurant;