import AppRegistry from './src/app'
AppRegistry();

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList
} from 'react-native';

import Post from './src/components/Post'


export default class InstaluraMobile extends Component {
  
  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos')
      .then(response => response.json())
      .then(json => this.setState({fotos: json}))
  }

  render() {
    const fotos = [
      {id: 1, usuario: 'rafael'},
      {id: 2, usuario: 'alberto'},
      {id: 3, usuario: 'vitor'}
    ];

    return (
      <FlatList style={styles.container}
                keyExtractor={item => item.id}
                data={fotos}
                renderItem = {({item}) => 
                  <Post/>
                }
      />      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

});

AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
*/