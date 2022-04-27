# Projeto 03 - Módulo 03 - Back-end
## _Blue Ed Tech Projeto Extra, Turma 12 - 2022_
### Rick Morty 

Autores: <br/>
Marcelo A Santos - GH: _DJMarshallSantos_<br/>
Felipe Santos - GH: _Felipe360flp_<br/>
<br/>
Tutores Turma 12 - 2022: <br/>
Leo Ruiz - GH: _Leoruiz197_<br/>
Maria Eduarda de Araújo Cardoso - GH: _dudahcardoso_<br/>
<br/>
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

- Tela de login:<br/>
    _e-mail_ <br/>
    _senha_ <br/>
    _botão de login_<br/>
    _botão de cadastro_<br/>
<br/>
- Tela de cadastro de usuários:<br/>
    _campo nome_<br/>
    _nome de usuário_ <br/>
    _e-mail_<br/>
    _senha_<br/>
    _url de imagem de perfil_<br/>
<br/>
- Tela de personagens:<br/>
    _visualizar todos os personagens_<br/>
    _campo de pesquisa_<br/>
    _botão adicionar_<br/>
    _botão listar personagens_ <br/>
    _botões laterais de navegação entre páginas_<br/>
    _botão sair_<br/>

- Tela de cadastro de personagens: <br/>
    _campo nome_<br/>
    _campo URL da imagem_<br/>
    _botão adicionar personagem_<br/>
<br/>
- Tela de personagens by id:<br/>
    _visualizar um único personagem_ <br/>
    _botão editar personagem_<br/>
    _botão remover personagem do banco de dados_<br/>
    _botão editar_<br/>
<br/>
- Tela de edição:<br/>
    _campo nome_<br/>
    _campo URL da imagem_<br/>
    _botão confirmar edicao_<br/>
<br/>
- Tela de exclusão de personagens:<br/>
    _mensagem de confirmação_<br/>
    _botão remover_<br/>
    _botão cancelar_<br/>
<br/>
- Banco de dados:<br/>
    _não relacional_<br/>
    _hospedado no MongoDB Atlas_<br/>
<br/>
- Likns de entraga <br/>
    _deploy Heroku_<br/>
    _repositório GitHub_<br/>
<br/>
- Commits<br/>
    _seguir padrão Conventional Commits_<br/>

<br/>

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
