import { AsyncStorage } from 'react-native'

export default class InstaluraFetchService { 
    
    static get(recurso) {   //componentDidMount -> Feed.js

        const uri = 'https://instalura-api.herokuapp.com/api'+recurso

        return AsyncStorage.getItem('token')
            .then(token => {
                return {
                    headers: new Headers({
                        "X-AUTH-TOKEN": token
                    })
                }
            })
            .then(requestInfo => fetch(uri, requestInfo))
            .then(resposta =>{
                if(resposta.ok)
                    return resposta.json()
                throw new Error('Não foi possível completar a operação')
            })
    }

    static post(recurso, dados){   //requisições do POST
        const uri = 'https://instalura-api.herokuapp.com/api'+recurso

        return AsyncStorage.getItem('token')
            .then(token => {
                return {
                    method: 'POST',
                    body: JSON.stringify(dados),
                    headers: new Headers({
                        "Content-type": "application/json",
                        "X-AUTH-TOKEN": token
                    })
                }
            })
            .then(requestInfo => fetch(uri, requestInfo))
            .then(resposta =>{
                if(resposta.ok)
                    return resposta.json()
                throw new Error('Não foi possível completar a operação')
            })
    }
}