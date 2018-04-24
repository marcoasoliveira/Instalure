import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import InputComentario from './InputComentario'
import Likes from './Likes'

const screen = Dimensions.get('screen')

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foto: this.props.foto,
    }
  }
  // carregaIcone(likeada) {
  //   if (likeada)
  //     return require('../../resources/img/s2-checked.png')
  //   return require('../../resources/img/s2.png')
  // }
  like = () => {
    const { foto } = this.state

    let novaLista = []
    if (!foto.likeada)
      novaLista = [...foto.likers, { login: 'meuUsuario' }]
    else
      novaLista = foto.likers.filter(
        liker => this.login === 'meuUsuario'
      )

    const fotAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    }
    this.setState({ foto: fotAtualizada })
  }
  // exibeLikes(likers) {
  //   if (likers.length === 0)
  //     return

  //   return (
  //     <Text style={styles.likes}>
  //       {likers.length} {likers.length <= 1 ? 'curtida' : 'curtidas'}
  //     </Text>
  //   )
  // }
  exibeLegenda(foto) {
    if (foto.comentario === '')
      return

    return (
      <View style={styles.comentario}>
        <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text>
      </View>
    )
  }

  adicionaComentario(valorComentario, inputComentario){
    if(valorComentario === '')
      return;
    
      const novaLista = [...this.state.foto.comentarios,{
                          id: valorComentario,
                          login: 'meuUsuario',
                          texto: valorComentario
                          }
                        ]

      const fotoAtualizada = {
        ...this.state.foto,
        comentarios: novaLista
      }

      this.setState({foto: fotoAtualizada})
  }

  render() {
    const { foto } = this.state
    return (
      <View>
        <View style={styles.header}>
          <Image source={{ uri: foto.urlPerfil }} style={styles.profilePhoto} />
          <Text>{foto.loginUsuario}</Text>
        </View>
        <Image source={{ uri: foto.urlFoto }} style={styles.photo} />
        <View style={styles.rodape}>
          {/* <TouchableOpacity onPress={this.like}>
            <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
          </TouchableOpacity>
          {this.exibeLikes(foto.likers)} */}
          <Likes foto = {foto} likeCallback = {this.like.bind(this)}/>
          {this.exibeLegenda(foto)}
        </View>
        {foto.comentarios.map(comentario =>
          <View style={styles.comentario} key={comentario.id}>
            <Text style={styles.tituloComentario}>{comentario.login}</Text>
            <Text>{comentario.texto}</Text>
          </View>
        )}
        <InputComentario comentarioCallback = {this.adicionaComentario.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePhoto: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 20
  },
  photo: {
    width: screen.width,
    height: screen.width
  },
  rodape: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  comentarios: {
    flexDirection: 'row',
  },
  comentario:{
    margin: 5
  },
  tituloComentario: {
    fontWeight: 'bold',
    marginRight: 5,
  }
});