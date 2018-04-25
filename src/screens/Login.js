import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Image,
  ImageBackground,
  AsyncStorage
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Login extends Component{
    
    constructor(){
        super()
        this.state = {
            usuario: '',
            senha: '',
            mensagem: ''
        }
    }

    efetuaLogin = () => {
        const uri = "http://192.168.0.137:8080/api/public/login"

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha
            }),
            headers: new Headers({
                'Content-type':'application/json'
            })
        }

        fetch(uri, requestInfo)
            .then(response => {
                if(response.ok){
                    return response.text()
                }
                throw new Error('Não foi possivel efetuar o login')
            })
            .then(token => {
                AsyncStorage.setItem('token', token)
                AsyncStorage.setItem('usuario', this.state.usuario)
            })
            .catch(error => this.setState({mensagem: error.message}))
    }

    render(){
        return(
            <ImageBackground style={styles.container} source={require('../../resources/img/bg.jpg')}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <Image source={require('../../resources/img/logo.png')}
                style={styles.logo}/>
                <View style={styles.form}>
                    <TextInput
                        style={styles.inputT}
                        autoCapitalize="none"
                        placeholder="Usuário"
                        onChangeText={texto => this.setState({usuario: texto})}/>
                    <TextInput
                        style={styles.inputT}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        placeholder="Senha"
                        onChangeText={texto => this.setState({senha: texto})}/>
                    <Button title="Login" onPress={this.efetuaLogin}/>
                    <Text style={styles.mensagem}> {this.state.mensagem} </Text>
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    inputT:{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 5
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 40,
        color: '#fff'
    },
    logo:{
        width: 60,
        height: 60
    },
    mensagem:{
        color: '#e74c3c'
    }
})