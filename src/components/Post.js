import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import InputComentario from './InputComentario';
import Likes from './Likes';


export default class Post extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      foto: this.props.foto,
    }
  }

  exibeLegenda(foto) {
    if(foto.comentario === '')
      return; 

    return (
      <Text>
        <Text style={styles.tituloComentario}>{foto.loginUsuario} </Text>
        <Text>{foto.comentario}</Text>
      </Text>
    );
  }

  // like = () => {                          movida para o componente principal
  //   const { foto } = this.state
    
  //   let novaLista = [];
  //   if(!foto.likeada) {
  //     novaLista = [
  //       ...foto.likers,
  //       {login: 'meuUsuario'}
  //     ]
  //   } else {
  //     novaLista = foto.likers
  //       .filter(liker => liker.login != 'meuUsuario')
  //   }
    
  //   const fotoAtualizada = {
  //     ...foto,
  //     likeada: !foto.likeada,
  //     likers: novaLista
  //   }
  //   this.setState({foto: fotoAtualizada});
  // }

  // adicionaComentario = (valorComentario) => {
  //   if(valorComentario === '')
  //     return;

  //   const novaLista = [...this.state.foto.comentarios, {
  //     id: Math.random(),
  //     login: 'meuUsuario',
  //     texto: valorComentario
  //   }]
    
  //   const fotoAtualizada = {
  //     ...this.state.foto,
  //     comentarios: novaLista
  //   }

  //   this.setState({foto: fotoAtualizada})
  // }
  
  render() {
    const { foto, likeCallback, comentarioCallback } = this.props

    return (
        <View>
            <View style={styles.header}>
            <Image style={styles.fotoDePerfil}
                source={{uri: foto.urlPerfil}}/>
            <Text>{foto.loginUsuario}</Text>
            </View>
            
            <Image source={{uri: foto.urlFoto}}
                style={styles.foto}/>

            <View style={styles.rodape}>
              <Likes foto={foto} likeCallback={likeCallback}/>

              {this.exibeLegenda(foto)}

              {foto.comentarios.map( comentario => 
                <Text key={comentario.id}>
                  <Text style={styles.tituloComentario}>{comentario.login} </Text>
                  <Text>{comentario.texto}</Text>
                </Text>
              )}

              <InputComentario 
                comentarioCallback={comentarioCallback}
                idFoto={foto.id}/>
            </View>
        </View>
    );
  } 
}

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  header: {
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10, 
    width: 40, 
    height: 40, 
    borderRadius: 20
  },
  foto: {
    width: screen.width, 
    height: screen.width
  },
  rodape: {
    margin: 10
  },
  tituloComentario: {
    marginRight: 5,
    fontWeight: 'bold'
  },
});