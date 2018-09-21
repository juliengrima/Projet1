import React, { Component } from 'react'
import '.././styles/favorites.css'

class Favorites extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        this.getFavorites();
    }


    getFavorites() {
        fetch("http://localhost:3000/favorites-list").then(response => response.json()).then(data => {
            this.setState({
                favorites: data
            })
        })
    }

    renderFavoritesList() {
        const restaurantsList = this.state.favorites
            .map((restaurant, i) =>
                <div>
                    <h4>{restaurant.name} | {restaurant.address2}</h4>
                    <hr className="hr-list" />
                </div>
            )
        return <div className="mt-2">{restaurantsList}</div>
    }

    render() {
        return (
            <div>
                <h1>Mes Favoris</h1>
                <hr className="hr-title" />
                {this.renderFavoritesList()}
            </div>
        )
    }

}

export default Favorites