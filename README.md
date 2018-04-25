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

## Aula 3: 

- Adição dos novos comentários

- Corrigi o problema de não carregar os comentários antigos, a foto do usuário agora é a foto do perfil (antes copiava a postada).

- Nem sempre precisa usar REDUX

- Observar o problema antes de utilizar uma lib, framework, etc...

- Para ler [Medium: Dan Abramov](https://medium.com/@dan_abramov)

- *receber dados e callbacks via props*

- Criação e atribuição de responsabilidades aos componentes InputComentario e Likes

- Diferença de nome entre o estilo chamado e o nome da classe CSS pode causar erro no APP (laranja) e o app não roda

## Aula 4:

- o endereço da api foi alterado devido problemas com a rede

- foram realizadas mudanças para manter o estado em um único componente

- funções `like() e adicionaComentario()` movidas para o componente principal index-android.js

- criação da tela de login (src/screens/login.js)

- definindo a tela de login como primeira tela da aplicação

- criação da lógica de login

## Aula 5

- Navegação entre telas

- [React Navigation - AirBnB](https://reactnavigation.org/) e [React Native Navigation - Wix](https://github.com/wix/react-native-navigation)

- A lib utilizada no projeto é a React Native Navigation

- *Cuidados*: Não é apenas instalar via NPM ou YARN, envolve fazer adaptações na camada Java/Objective C

- `react-native-navigation: "^1.1.93"` versão utilizada, adicionada no package Json.

- *Adaptações*: 

[iOS](https://wix.github.io/react-native-navigation/#/installation-ios)

[Android](https://wix.github.io/react-native-navigation/#/installation-android)

- Processo de 'Linking'

- 


