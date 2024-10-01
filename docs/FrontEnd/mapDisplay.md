---
sidebar_position: 33
---

# MapDisplay.js

Este componente muestra un mapa de Google con la ubicación del usuario, restaurantes cercanos y la ruta para llegar a esos restaurantes desde la ubicación del usuario. Utiliza la API de Google Maps y la biblioteca google-maps-react para integrar la funcionalidad del mapa en la aplicación React.

```js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapDisplay extends Component {
  constructor(props) {
  super(props);
  this.state = {
  markers: [],
  };
  }

  componentDidMount() {
  this.getUserLocation().then((userLocation) => {
  if (userLocation) {
  this.props.google.maps.event.addListenerOnce(this.map, 'idle', () => {
  this.findNearbyRestaurants(userLocation);
  this.addUserMarker(userLocation);
  });
  }
  });
  }

  getUserLocation() {
    return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    (position) => {
    const userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    };
    resolve(userLocation);
    },
    () => {
    reject(null);
    }
    );
    } else {
    reject(null);
    }
    });
  }

  findNearbyRestaurants(userLocation) {
    const { google, circleRadius } = this.props;
    const service = new google.maps.places.PlacesService(this.map);

    const request = {
      location: userLocation,
      radius: circleRadius,
      type: 'restaurant',
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.clearMarkers();
      const restaurantLocations = results.map((place) => place.geometry.location);
      this.addRestaurantMarkers(restaurantLocations);
      this.calculateAndDisplayRoute(userLocation, restaurantLocations);
      }
    });
  }

  clearMarkers() {
    this.state.markers.forEach((marker) => {
    marker.setMap(null);
    });
    this.setState({ markers: [] });
  }

  addRestaurantMarkers(locations) {
    const { google } = this.props;
    locations.forEach((location) => {
    const marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    });
    this.setState((prevState) => ({ markers: [...prevState.markers, marker] }));
    });
  }

  addUserMarker(location) {
    const { google } = this.props;
    new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Tu ubicación',
      icon: {
      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      },
    });
  }

  calculateAndDisplayRoute(userLocation, restaurantLocations) {
    const { google } = this.props;
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    const start = new google.maps.LatLng(userLocation.lat, userLocation.lng);
    const end = new google.maps.LatLng(userLocation.lat, userLocation.lng);

    const waypoints = restaurantLocations.map((location) => ({
      location,
      stopover: true,
    }));

    const request = {
      origin: start,
      destination: end,
      waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
      directionsDisplay.setMap(this.map);
      directionsDisplay.setDirections(result);
      }
    });
  }

  render() {
    const { google, centerLat, centerLng, zoom, width, height } = this.props;

    const mapStyles = {
      width: width,
      height: height,
    };

    const defaultCenter = {
      lat: centerLat,
      lng: centerLng,
    };

    return (
      <div>
        <Map
        google={google}
        zoom={zoom}
        containerStyle={mapStyles}
        initialCenter={defaultCenter}
        onReady={(mapProps, map) => {
        this.map = map;
        }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD_J3lNG9mflqdvnDqhjyoJk9ihirz3zMY',
})(MapDisplay);
```
