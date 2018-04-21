import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            foto: this.props.foto
        }
    }

    carregaIcone(){
       return this.state.foto.likeada?
            require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    like = () => {
        let novaLista = []
        if(!this.state.foto.likeada){
            novaLista = this.state.foto.likers.concat({login: 'meuUsuario'})
        } else {
            novaLista = this.state.foto.likers.filter(liker => liker.login != 'meuUsuario')
        }

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada,
            likers: novaLista
        }

        this.setState({foto: fotoAtualizada})
    }

    exibeLikes(likers) {
        if(likers.length <= 0){
            return;
        }
        return (
            <Text style={styles.likes} >
                {likers.length} {likers.length > 1? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    exibeLegenda(foto) {
        if (foto.comentario === ''){
            return
        }

        return(
            <Text style={styles.comentario}>
                <Text style={styles.tituloComentario}> {foto.loginUsuario} </Text>
                <Text > {foto.comentario}</Text>
            </Text>
        )
    }

    render() {
        
        const { foto } = this.state;

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
                    <Image style = {styles.fotoDePerfil} source={{uri: foto.urlPerfil}}/>
                    <Text>{foto.loginUsuario}</Text>
                </View>  

                <Image source={{uri: foto.urlFoto}} style={styles.foto}/>

                <View style = {styles.footer}>
                    <TouchableOpacity onPress={(this.like)}>
                        <Image source={this.carregaIcone(foto.likeada)} style={styles.botaoLike}/>
                    </TouchableOpacity>
                    {this.exibeLikes(foto.likers)}
                    {this.exibeLegenda(foto)}

                    
                    
                </View>
                    


            </View>   
          );
    }
}

  const width = Dimensions.get('screen').width;
  const styles = StyleSheet.create({
    header: {
      margin: 10, 
      flexDirection: 'row', 
      alignItems: 'center',
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
    },

    footer:{
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },

    botaoLike:{
       height: 40,
       width: 40,
       margin: 10
    },

    likes:{
        fontWeight: 'bold'
    },

    comentario:{
        flexDirection: 'row',
        marginBottom: 10
    },

    tituloComentario:{
        fontWeight: 'bold',
        marginRight: 5
    }
  });