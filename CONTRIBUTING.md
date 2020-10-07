# Contributing

Este documento tem como objetivo explicar de forma clara e direta como fazer uma nova contribuição para o projeto.

### Baixando o projeto

Você pode clonar o projeto com o seguinte comando:

```sh
git clone https://github.com/natahouse/hacktoberfest-2020.git
```

E navegar para a pasta do projeto:

```sh
➜  ~ cd hacktoberfest-2020
```

Agora só falta instalar as dependências com seu gerenciador de pacotes de preferência:

```sh
➜  hacktoberfest-2020 git:(main) ✗ npm install # ou yarn install
```

Como o site usa somente de arquivos estátivos você pode abrir o site clicando duas vezes no arquivo `index.html` mas caso você tenha em mente fazer alguma alteração no projeto, basta executar o script:

```sh
➜  hacktoberfest-2020 git:(main) ✗ npm star # ou yarn start
```

Esse script também atualiza automaticamente o site caso você faça alterações no código, facilitando o processo de desenvolvimento.

### Contribuindo criando sua página

Queremos saber um pouco sobre você! Para isso você pode criar uma cópia da pasta `TEMPLATE` dentro da pasta `people` e renomear para o seu nome. Tente escrever sem nenhum espaço e de preferência com letras minúsculas. Exemplo:

```sh
/people/arthur-lima # ✅
/people/arthurlima # ✅
/people/Arthur Lima # ❌
```

Dentro desta pasta altere o arquivo `index.html` com suas informações. Você está aberto para fazer alterações na página HTML e nos estilos localizados em `styles.css`!

### Adicione sua página na listagem

Após finalizar suas customizações, você deve adicionar sua página no arquivo `/people/data.js` para que ela apareça na listagem e outras pessoas possam visualizar suas alterações.
Basta copiar um já existente e alterar com as informações necessárias. Um exemplo adicionando uma página criada com o nome de "teste de exemplo":

```js
const data = [
  {
    name: 'nata.house',
    image: '/people/natahouse/profile.png',
    title: 'Fábrica de software',
    description:
      'Estamos muito felizes em reunir essa moçada pra contribuir com a comunidade open-source o/.',
    folderUrl: 'natahouse'
  },
+ {
+   name: 'Teste de exemplo',
+   image: '/people/teste-exemplo/profile.png',
+   title: 'E x e m p l o',
+   description:
+     'Somente um exemplo para o arquivo de CONTRIBUTING.md',
+   folderUrl: 'teste-exemplo'
+ },
];
```

### Seja criativo!

Preencha com suas informações, adicione imagens, gifs, links para suas redes sociais, seja criativo!