import React, { Component } from 'react';
import './../styles/navbar.css';
class Navbar extends Component {

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

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-color" id="nav">
          <a className="navbar-brand" href="#">Restau Paris</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ml-4">
                <a className="nav-link" href="#">Nos restaurants</a>
              </li>
              <li className="nav-item active ml-4">
                <a className="nav-link" href="#">Nos restaurants</a>
              </li>
              <li className="nav-item active ml-4">
                <a className="nav-link" href="#">Nos restaurants</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ml-4">
              <input className="form-control mr-sm-2 input" type="search" placeholder="La place..." aria-label="Search" />
              <button className="btn btn-primary my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;