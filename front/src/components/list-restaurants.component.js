import React, { Component } from 'react';
import './../styles/list-restaurants.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  renderRestaurantsList() {
    const restaurantsList = this.props.restaurants.map((restaurant, i) =>
      <div className="card col-lg-4 mt-2" key={i}>
        <div className="card-header d-flex">
          <h3 className="mt-2 mb-2 flex-grow-1">
            {restaurant.name}
          </h3>
          {/* <FontAwesomeIcon icon="far fa-heart" /> */}
        </div>
        <img className="card-img" src={restaurant.image} alt="restaurant" />
        {/* <button onClick={this.addFavorites(restaurant)}>
          Ajouter aux favoris
        </button> */}
        <p className="note">{restaurant.note}/5</p>
        <div className="card-footer">
          <p>{restaurant.address1} ({restaurant.address2})</p>
          <a className="link" href={restaurant.to_website} target="_blank">Lien vers le site</a>
        </div>
      </div>
    )
    return <div className="row mt-2">{restaurantsList}</div>
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <h1>Restaurants</h1>
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