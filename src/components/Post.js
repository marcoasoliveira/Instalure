import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

export default class Post extends Component {
    render() {
        return (
            /*
              <View>
                {fotos.map(foto => 
                <View key = {foto.id}>
                  <Text>{foto.usuario}</Text>
                  <Image source={require('./resources/img/alura.jpg')} style={{width: screen.width, height: screen.width}}/>
                </View>
              </View>
              )}
        
              <FlatList style={{marginTop: 20}} Faz a mesma coisa que o de cima, com componente próprio
                  keyExtractor={item => item.id}
                  data={fotos}
                  renderItem = {({item}) => 
                    <View>
                      <Text>{item.usuario}</Text>
                      <Image source={require('./resources/img/alura.jpg')} style={{width: screen.width, height: screen.width}}/>
                    </View>
                  }
              />  
            */
            <View>
                <View style = {styles.header}>
                <Image style = {styles.fotoDePerfil} source={{uri: this.props.foto.urlPerfil}}/>
                <Text>{this.props.foto.loginUsuario}</Text>
                </View>
                <Image source={{uri: this.props.foto.urlFoto}} style={styles.foto}/>
            </View>   
          );
    }
}

  const width = Dimensions.get('screen').width;
  const styles = StyleSheet.create({
    header: {
      margin: 10, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
  
    fotoDePerfil:{
      marginRight: 10,
      width: 40,
      height: 40,
      borderRadius: 50
    },
  
    foto:{
      width: width,
      height: width
    }
  });