import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Tabs from './src';
import AsyncStorage from '@react-native-community/async-storage';

/**************************************************
 * App main component
***************************************************/
export default class App extends Component {
  state = {
    cities: []
  }
  
  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {  // check
      return item.id === city.id;
    });
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ];  // check
    this.setState({
      cities
    });
  };

  render() {
    return (
      <Tabs screenProps={{
        cities: this.state.cities,
        addCity: this.addCity,
        addLocation: this.addLocation
      }} />
    )
  }
}