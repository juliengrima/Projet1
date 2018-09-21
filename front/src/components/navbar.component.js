import React, { Component } from 'react';
import './../styles/navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  componentDidMount() {
    this.changeNavbarColor();
  }

  changeNavbarColor() {
    var nav = document.getElementById('nav');

    window.addEventListener('scroll', function (event) { // To listen for event
      event.preventDefault();

      if (window.scrollY <= 50) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
      } else {
        nav.style.backgroundColor = '#000';
        nav.style.transition = '0.5s';
      }
    });
  }

  searchRestaurant = (event) => {
    event.preventDefault();
    const data = new FormData(event.target)
    const search = data.get('word')
    this.setState({search: search})
    // const regex = new RegExp(search, 'i')
    // const result = this.props.restaurants.filter(restaurant => restaurant.name.match(regex))
    // console.log(result);
    this.filteredRestaurants(search)
    }

    filteredRestaurants = result => {
      this.props.filteredRestaurants(result)
    }


  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-color" id="nav">
          <Link className="navbar-brand" to="/">Accueil</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ml-4">
                <Link to="/" className="nav-link">Nos restaurants</Link>
              </li>
              <li className="nav-item active ml-4">
                <Link to="/map" className="nav-link">Carte des restaurants</Link>
              </li>
              <li className="nav-item active ml-4">
                <Link to="/favorites" className="nav-link">Mes favoris</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ml-4" onSubmit={this.searchRestaurant} >
              <input className="form-control mr-sm-2 input" type="search" placeholder="La place..." aria-label="Search" name="word" />
              <button className="btn btn-primary my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;