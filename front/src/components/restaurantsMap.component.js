import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const RestaurantsMap = withScriptjs(
  withGoogleMap((props) => {
    const markers = props.restaurants.map((restaurant, index) => (
    <Marker
      key={index}
      // label={restaurant.name}
      position={{ lat: restaurant.latitude, lng: restaurant.longitude }}
    />));

  return (
    <GoogleMap
      defaultZoom={13}
      center={{ lat: 48.856614, lng: 2.3522219 }}
    >
      {markers}
    </GoogleMap>);
}
))

export default RestaurantsMap;