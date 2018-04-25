import React, { Component } from 'react'
import{
    AppRegistry,
    StyleSheet,
    FlatList,
    Platform
} from 'react-native'
import Post from './components/Post'
import Login from './screens/Login'

//logica

export default () => {
    AppRegistry.registerComponent('InstaluraMobile', () => Login);
}


