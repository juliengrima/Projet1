import React, { Component } from 'react';
import './../styles/list-restaurants.css';
class ListRestaurant extends Component {


  // componentDidMount() {
  //   this.getRestaurants();
  // }

  // getRestaurants = () => {
  //   const url = "http://localhost:3000/restaurants"
  //   fetch(url)
  //     .then(response => {
  //       return response.json()
  //     }).then(data => {
  //       this.setState({
  //         restaurants: data
  //       })
  //       console.log(this.state.restaurants)
  //     })
  // }

  renderRestaurantsList() {
    const restaurantsList = this.state.restaurants.map((restaurant, i) =>
      <div className="mx-auto restaurant mt-2" key={i}>
        <h2 className="mt-4 mb-4">
          {restaurant.name}
        </h2>
        <img className="image" src={restaurant.image} alt="restaurant" />
        <h3>{restaurant.address1} {restaurant.address2}</h3>
        <p className="note">{restaurant.note}/5</p>
        <a href={restaurant.to_website} target="_blank">Lien vers le site</a>
      </div>
    )
    return <div className="row mt-2">{restaurantsList}</div>
  }

  render() {
    return (
      <div>
        <div className="container-fluid header">
          <div className="header-brightness"></div>
          <div className="row h-100">
            <div className="mx-auto my-auto header-title">
              <h1 className="mt-2">Vous voulez trouvez un restaurant à Paris ?</h1>
              <h2 className="mt-2">Rechercher parmis plus de nos 400 restaurants</h2>
              <button className="btn btn-primary btn-lg mt-2">Voir notre gallerie</button>
            </div>
          </div>
        </div>
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