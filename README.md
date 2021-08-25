<h1 align="center" name="title">MyPlants</h1>


# :pushpin: Tabela de conteúdos
<!--ts-->
   * [Sobre](#sobre)
   * [Como rodar o projeto](#run)
      * [Startar o Mobile](#api)
   * [Preview do Projeto](#preview)
   * [Tecnologias](#tecnologias)
   * [Licença](#license)
<!--te-->


<h1 name="sobre">ℹ Sobre o Projeto</h1>
Aplicação implementada com âmbito de expandir os conhecimentos em React Native.
Agradecimento especial ao professor Rodrigo Gonçalves, por compartilhar seu conhecimento.

<h1 name="run">:construction_worker: Como rodar o projeto</h1> <br>

```bash
# Clone Repository
$ git clone https://github.com/dantls/nlw5-mobile
```


<h3 name='app'>📦 Startar o Servidor</h3><br>

```bash
# Instale as dependências
$ yarn

# Navegue até a pasta src\services
# Insira seu IP na baseURL do arquivo src\services\api.ts
$ json-server -H 192.168.0.3 -p 3333 -w server.json
```


<h3 name='api'>📦 Startar o APP mobile</h3><br>

```bash
$ yarn start | expo start
```

Irá abrir uma aba no seu navegador e apacerá um QR Code, se escanear ele no aplicativo Expo, abrirá a aplicação, existe a opção para rodar em um emulador.

<h1 name="tecnologias">🛠 Tecnologias</h1>

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)

<h1 name="tecnologias">➕ Plus</h1>

## Libraries

- [React Navigation](https://reactnavigation.org/)
- [Lottie-react-native](https://docs.expo.dev/versions/latest/sdk/lottie/)
- [React-native-reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/)
- [AsyncStorage](https://docs.expo.dev/versions/v42.0.0/sdk/async-storage/)
- [Notifications](https://docs.expo.dev/versions/v42.0.0/sdk/notifications/)




<h4 name="license" align="center">
    Desenvolvido por <a href="https://www.linkedin.com/in/danilo-gomes-394459103/" target="_blank">Danilo Gomes</a>
</h4>
