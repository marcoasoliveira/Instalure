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

export default class Likes extends Component {

    exibeLikes(likers) {
        if (likers.length === 0)
            return

        return (
            <Text style={styles.likes}>
                {foto.likers.length} {foto.likers.length <= 1 ? 'curtida' : 'curtidas'}
            </Text>
        )
    }

    carregaIcone(likeada) {
        if (likeada)
          return require('../../resources/img/s2-checked.png')
        return require('../../resources/img/s2.png')
    }

    render(){

        const {foto, likeCallback} = this.props

        return(
            <View>
                <TouchableOpacity onPress={likeCallback}>
                    <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)}/>
                </TouchableOpacity>
                {this.exibeLikes(foto.likers)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoDeLike: {
        height: 40,
        width: 40,
        marginBottom: 10
      },
      likes: {
        fontWeight: 'bold'
      },
})