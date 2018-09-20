import React, { Component } from 'react';
import './../styles/list-restaurants.css';

class ListRestaurant extends Component {

  addFavorites = (restaurant) => {
    return () => {
      const url = "http://localhost:3000/favorites"
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: restaurant.name,
          address2: restaurant.address2,
        })
      })
    }
  }

  // checkProps = () => {
  //   console.log(this.props.area);
  //   console.log(this.props.search);  
  // }

  renderRestaurantsList() {
    
    const restaurantsList = this.props.restaurants
    .filter(restaurant => restaurant.address2 === this.props.area && restaurant.name.match(this.props.search))
    
    .map((restaurant, i) =>
      <div className="card col-lg-4 mt-2" key={i}>
        <div className="card-header">
          <h2 className="mt-2 mb-2">
            {restaurant.name}
          </h2>
        </div>
        <img className="img-fluid" src={restaurant.image} alt="restaurant" />
        <button onClick={this.addFavorites(restaurant)}>
          Ajouter aux favoris
        </button>
        <h3>{restaurant.address1} {restaurant.address2}</h3>
        <p className="note">{restaurant.note}/5</p>
        <a href={restaurant.to_website} target="_blank">Lien vers le site</a>
      </div>
    )
    console.log('liste restos', restaurantsList)
    return <div className="row mt-2">{restaurantsList}</div>
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <h1>Restaurants</h1>
              {/* <button onClick={this.checkProps}>Test Props</button> */}
              <hr />
            </div>
          </div>
          {this.renderRestaurantsList()}
        </div>
      </div>
    )
  }
}

export default ListRestaurant;