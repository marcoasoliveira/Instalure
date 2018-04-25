import React, { Component } from 'react';
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
    fetch('http://192.168.0.137:8080/api/public/fotos/rafael')
      .then(response => response.json())
      .then(json => this.setState({fotos: json}))
  }

  like = (idFoto) => {  
    const  foto  = this.state.fotos.find(
      foto => foto.id === idFoto
    )
    
    let novaLista = [];
    if(!foto.likeada) {
      novaLista = [
        ...foto.likers,
        {login: 'meuUsuario'}
      ]
    } else {
      novaLista = foto.likers
        .filter(liker => liker.login != 'meuUsuario')
    }
    
    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    }
    const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)
    this.setState({fotos});
  }

  adicionaComentario = (idFoto, valorComentario, inputComentario) => {
    if(valorComentario === '')
      return;

    const foto = this.state.fotos  // uma única foto
      .find(foto => foto.id === idFoto)

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'meuUsuario',
      texto: valorComentario
    }]
    
    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    }

    const fotos = this.state.fotos //lista de fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)
    this.setState({fotos})
    inputComentario.clear()
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