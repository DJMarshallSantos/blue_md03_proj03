# Projeto 03 - Módulo 03 - Back-end
## _Blue Ed Tech Projeto Extra, Turma 12 - 2022_
### Rick Morty 

###Autores: 
Marcelo A Santos - GH: _DJMarshallSantos_
Felipe Santos - GH: _Felipe360flp_
###Tutores Turma 12 - 2022:
Leo Ruiz - GH: _Leoruiz197_
Maria Eduarda de Araújo Cardoso - GH: _dudahcardoso_

## Objetivo

Desenvolver uma API totalmente do zero, que seja capaz de suprir o front-end apresentado a seguir.

### _O projeto deve ter:_

### Endpoints (8 pontos)

- [GET] Leitura de todas os personagens (1,6 pontos);
- [GET] Leitura de personagens individuais (por ID) (1,6 pontos).
- [POST] Criação de personagens (1,6 pontos);
- [PUT] Edição de personagens por ID (1,6 pontos);
- [DELETE] Exclusão de personagens por ID (1,6 pontos).

### Requisitos (2 pontos)

- Persistência de dados no MongoDB (1 pontos);
- Formatação do código utilizando o Prettier (1 pontos).

### Características do Projeto

- Tela de login:
    _e-mail_ 
    _senha_ 
    _botão de login_
    _botão de cadastro_

- Tela de cadastro de usuários:
    _campo nome_
    _nome de usuário_ 
    _e-mail_
    _senha_
    _url de imagem de perfil_

- Tela de personagens:
    _visualizar todos os personagens_
    _campo de pesquisa_
    _botão adicionar_
    _botão listar personagens_ 
    _botões laterais de navegação entre páginas_
    _botão sair_

- Tela de cadastro de personagens: 
    _campo nome_
    _campo URL da imagem_
    _botão adicionar personagem_

- Tela de personagens by id:
    _visualizar um único personagem_ 
    _botão editar personagem_
    _botão remover personagem do banco de dados_
    _botão editar_

- Tela de edição:
    _campo nome_
    _campo URL da imagem_
    _botão confirmar edicao_

- Tela de exclusão de personagens:
    _mensagem de confirmação_
    _botão remover_
    _botão cancelar_

- Banco de dados:
    _não relacional_
    _hospedado no MongoDB Atlas_

- Likns de entraga 
    _deploy Heroku_
    _repositório GitHub_

- Commits
    _seguir padrão Conventional Commits_


## Tech

Tecnologia usada no código:

- [express] = Um framework Node.js mínima e flexível que fornece um conjunto robusto de recursos para desenvolver aplicativos da Web e móveis.
- [nodemon] = Uma ferramenta que ajuda a desenvolver em node. js, reiniciando automaticamente o aplicativo do nó quando as alterações de arquivo no diretório são detectadas.
- [mongoose] = Uma biblioteca de modelagem de dados de objeto (ODM) para MongoDB e Node.js.
- [cors] = Um mecanismo para permitir ou restringir recursos solicitados em um servidor web dependendo de onde a solicitação HTTP foi iniciada.
- [node.js] - E/S com eventos para back-end

## Instalação

Instalação do node.js
1- Via navegador visite https://nodejs.dev/download/ e baixe o instalador do node.js
2- Sequindo os passos do instalador instale o software
3- Verifique a instalação usando command-prompt ou powershell

```sh
node -v
```

4- Faça o mesmo para NPM

```sh
npm -v
```

Instalação das dependências.

```sh
npm i express
npm i nodemon
npm i mongoose
npm i cors
```

## Arquivos

```
proj01_mod03
    .vscode
        settings.json
    node_modules
        ...
    src
        controllers
            characters.controller.js
        database
            database.js
        middlewares
            character.middleware.js
        models
            Character.js
        routes
            characters.routes.js
        services
            characters.service.js
    .gitignore
    .prettierrc.json
    characters.json
    index.js
    LICENSE
    package-lock.json
    package.json
    README.md
```

## Agradecimentos
Meus sinceros agradecimentos a Felipe Santos, meu companheiro developer, por sua 
paciência, compreensão, conhecimento e fantástico compartilhamento de grandes idéias.

Agradeço meus tutores, Leo Ruiz e Maria Eduarda, no módulo 1.
Muito obrigado pelo profissionalismo e domínio do conteúdo e métodologia Blue.

Um obrigado especial a minha esposa, Lindamara Dias, que com sua parceria, paciência
e amor fornece apoio veemente. Luv' ya!

## License
**Público**
