import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import FlatList from './flatlist.jsx';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: this.props.flats[0]
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.props.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

       // <GoogleMap selectedFlat={this.state.selectedFlat}/>
