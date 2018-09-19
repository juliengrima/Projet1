import React, { Component } from 'react'
import '.././styles/header.css'

class Header extends Component {

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
      </div>
    )
  }
}

export default Header