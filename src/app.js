import React, { Component } from 'react';
import Post from './components/Post' 
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList
  } from 'react-native';
  
class InstaluraMobile extends Component {

  constructor(){
    super();
    this.state = {
      fotos: []
    }
  }
    componentDidMount() {
      fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
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
                  data={this.state.fotos}
                  renderItem = {({item}) => 
                    <Post foto = {item}/>
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
  
export default () => {
    AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}