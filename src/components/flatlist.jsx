import React, { Component } from 'react';


import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat) => {
      return (
        <Flat
          flat={flat}
          key={flat.name}
          selectFlat={this.props.selectFlat}
          selected={this.props.selectedFlat.name === flat.name}/>
      );
    });
  }

  render() {
    return (
      <div className="flat-list">
        { this.renderList() }
      </div>
    );
  }
}


export default FlatList;
