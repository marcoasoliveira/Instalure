import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import Post from './Post';

export default class Feed extends Component {
  
  constructor() {
    super()
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    const uri = "https://instalura-api.herokuapp.com/api/fotos"
    
    AsyncStorage.getItem('token')
      .then(token => {
        return {
          headers: new Headers({
            "X-AUTH-TOKEN": token
          })
        }
      })
      .then(requestInfo => fetch(uri, requestInfo))
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}))
  }

  atualizaFotos(fotoAtualizada){
    const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada: foto)
    this.setState({fotos})
  }

  buscaFotoPorId(idFoto){
    return this.state.fotos
      .find(foto => foto.id === idFoto)
  }

  like = (idFoto) => {  
    const  foto  = this.state.fotos.find(
      foto => foto.id === idFoto
    )
    
    AsyncStorage.getItem('usuario')
      .then(usuarioLogado => {
        let novaLista = [];
        if(!foto.likeada) {
          novaLista = [
            ...foto.likers,
            {login: usuarioLogado}
          ]
        } else {
          novaLista = foto.likers
            .filter(liker => liker.login != usuarioLogado)
        }

        return novaLista
      })
      .then(novaLista => {
        const fotoAtualizada = {
          ...foto,
          likeada: !foto.likeada,
          likers: novaLista
        }

        this.atualizaFotos(fotoAtualizada)
      })

      const uri = `https://instalura-api.herokuapp.com/api/fotos/${idFoto}/like`

      AsyncStorage.getItem('token')
        .then(token => {
          return {
            method: 'POST',
            headers: new Headers({
              "X-AUTH-TOKEN": token
            })
          }
        })
        .then(requestInfo => fetch(uri, requestInfo))
  }

  adicionaComentario = (idFoto, valorComentario, inputComentario) => {
    if(valorComentario === '')
      return;

    const foto = this.buscaFotoPorId(idFoto)
    const uri = `https://instalura-api.herokuapp.com/api/fotos/${idFoto}/comment`

    AsyncStorage.getItem('token')
      .then(token => {
        return {
          method: 'POST',
          body: JSON.stringify({
            texto: valorComentario
          }),
          headers: new Headers({
            "Content-type": "application/json",
            "X-AUTH-TOKEN": token
          })
        }
      })
      .then(requestInfo => fetch(uri, requestInfo))
      .then(resposta => resposta.json())
      .then(comentario => [...foto.comentarios, comentario])
      .then(novaLista => {
        const fotoAtualizada ={
          ...foto,
          comentarios: novaLista
        }
        this.atualizaFotos(fotoAtualizada);
        inputComentario.clear()

      })
  }

  
  render() {
    return (
      <FlatList style={styles.container} 
          data={this.state.fotos}
          keyExtractor={ item => item.id }
          renderItem={ ({item}) =>
              <Post foto={item}
                    likeCallback={this.like}
                    comentarioCallback={this.adicionaComentario}/>
          } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});