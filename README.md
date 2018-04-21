# Instalure
APP desenvolvido no curso de React Native - Caelum

1º emulator -avd nexus

2º react-native start

3º react-native run-android

## aula 1
Apresentação do curso, criação do projeto, alteração do arquivo `index.android.js`, alteração do texto dentro da tag View, inserção de imagem.

todo componente tem, por padrão, `style = {{display: flex, flexDirecton: column}}`

## aula 2 (manhã)
- implementação de scroll com o componente `<FlatList>`, onde mapeamos as fotos sem o uso de `<.map>`, mas apenas passando valores para propriedades do componente.

- *NÃO ESQUECER DE IMPORTAR OS COMPONENTES!*

- KeyExtractor: usa o `.id` de um item da lista como key.

- O retorno do `.map()` ou do `renderItem = { ({item}) }` do FlatList precisa estar dentro de uma `View`

- Aplicação de CSS dentro do `StyleSheet.create()`

- Separação dos componentes `./src/app.js` e `./src/components/Post.js`

- Acesso à API [Instalura](https://instalura-api.herokuapp.com/api/public/fotos/rafael)

### OBSERVAÇÕES:

Atenção aos diretórios dos componentes nos imports e nas referências a arquivos internos (../..  ./)

## aula 2 (tarde)

- implementação do botão de like c/ validação para inserir ou retirar like

- *Obs:* não confundir onde usar `setState` e onde usar `this.state`

- Na apostila estava constando:

`exibeLikes(likers){`
        `if(likers.length <= 0){`
           ` return;`
      `  }`
        `return (`
           ` <Text style={styles.likes} >`
                `{foto.likers.length} {foto.likers.length > 1? 'curtidas' : 'curtida'}`
            `</Text>`
      `  )`
   ` }`

porem a chamada dos parametros está incorreta, pois é diferente do parametro recebido. o certo seria `likers.length` apenas.

- Paramos no capitulo 6.
