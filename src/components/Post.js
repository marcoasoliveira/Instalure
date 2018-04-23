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

const screen = Dimensions.get('screen')

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foto: this.props.foto,
      valorComentario: ''
    }
  }
  carregaIcone(likeada) {
    if (likeada)
      return require('../../resources/img/s2-checked.png')
    return require('../../resources/img/s2.png')
  }
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
  exibeLikes(likers) {
    if (likers.length === 0)
      return

    return (
      <Text style={styles.likes}>
        {likers.length} {likers.length <= 1 ? 'curtida' : 'curtidas'}
      </Text>
    )
  }
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

  adicionaComentario(){
    if(this.state.valorComentario === '')
      return;
    
      const novaLista = [...this.state.foto.comentarios,{
                          id: this.state.valorComentario,
                          login: 'meuUsuario',
                          texto: this.state.valorComentario
                          }
                        ]
      const fotoAtualizada = {
        ...this.state.foto,
        comentarios: novaLista
      }

      this.setState({foto: fotoAtualizada, valorComentario: ''})
      this.inputComentario.clear()
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
          <TouchableOpacity onPress={this.like}>
            <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
          </TouchableOpacity>
        </View>
        {this.exibeLikes(foto.likers)}
        {this.exibeLegenda(foto)}
        {foto.comentarios.map(comentario =>
          <View style={styles.comentario} key={comentario.id}>
            <Text style={styles.tituloComentario}>{comentario.login}</Text>
            <Text>{comentario.texto}</Text>
          </View>
        )}
        <View style={styles.novoComentario}>
              <TextInput style={styles.input} 
                         placeholder="Adicione um comentário"
                         ref={input=>this.inputComentario = input}
                         onChangeText={texto => this.setState({valorComentario: texto})}/>
              <TouchableOpacity onPress = {this.adicionaComentario.bind(this)}>
                <Image style={styles.icone} source={require('../../resources/img/send.png')}/>
              </TouchableOpacity>
            </View>
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
  botaoDeLike: {
    height: 40,
    width: 40,
    marginBottom: 10
  },
  likes: {
    fontWeight: 'bold'
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
  },
  input:{
    flex: 1,
    height: 40
  },
  icone:{
    height: 30,
    width: 30
  },
  novoComentario:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
