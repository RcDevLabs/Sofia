### API RESTfull SportIndex
---

Estrutura de pastas:
```terminal
-------/
---------/api
------------/logic
------------/routes
---------.config.json
```

> É necessária a configuração do config.json

Na pasta /api temos a pasta /routes que contém as rotas disponíveis, bem como eventuais limites de acesso.

Na pasta /logic temos as entidades (ex: /users) e também a /_helpers que são funções genéricas.

Veja o que são cada:

#### Rotas
---
Localizadas em /api/routes as rotas da api estão no arquivo api.js

Cada rota faz referência à um verbo e a respectiva ação da entidade relacionada à rota, por exemplo:

Rota /users, verbo get():

```javascript  [api.js]
router.route('/users')
	.get(Users.index);
```

Sendo que Users é um require para pasta da entidade:

var Users = require('../logic/users');

Isso utiliza o arquivo index.js da entidade, que é a lista dos controlles. No exemplo acima:

```javascript /logic/users/index.js
var f = require('./functions');

module.exports = {
	index: f.index
};
```

#### Entidades
---

A /api/logic/entidade contém 2 arquivos: index.js e model.js e 1 pasta: /functions.

o index.js da /entidade é um `module.exports` de um objeto que contém a relação dos controllers. As funções do controllers ficam na /functions, e o model no model.js

#### Helpers
---

Helpers ficam na pasta /api/logic/_helpers e são services ou factories que executam funções auxiliares (que não são exclusivas de alguma entidade específica)
O index.js de uma entidade é o module.exports de seus controllers.
Os controllers ficam dentro da /functions, na pasta da entidade.

### Rotas Disponíveis
---
-----------------------------------------------
|		rota		|		verbo		|		descricao	|	nivel |
|	/users		| post			|  post username e password para criar user | * |
| /users		|	get				| lista users criados | *
| /login		| post			| username e password para fazer login | *

### Listagem dos Models

```JSON
"Atributo" = {
      "idAtributo"                  : ""
    , "idClube"                         : ""
    , "Descricao"                       : ""
    , "idCategoria"                 : ""
    , "DataInclusao"                : ""
    , "idUsuarioInclusao"       : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  : ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"AtributoJogador" = {
      "idJogador"                       : ""
    , "idVersao"                        : ""
    , "idAtributo"                  : ""
},
"Categoria" = {
      "idCategoria"                 : ""
    , "Descricao"                   : ""
    , "DataInclusao"                : ""
    , "idUsuarioInclusao"       : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  : ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"Clube" = {
      "idClube"                         : ""
    , "DataFundacao"                : ""
    , "ValorMinimoAtrib"        : ""
    , "ValorMaximoAtrib"        : ""
    , "DataInclusao"                : ""
    , "idUsuarioInclusao"       : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  :   ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"Elenco" = {
      "idElenco"                        : ""
    , "idClube"                         : ""
    , "Descricao"                       : ""
},
"ElencoJogador" = {
      "idClube"                         : ""
    , "idElenco"                        : ""
    , "idJogador"                       : ""
    , "DataInicio"                  : ""
},
"Especialidade" = {
      "idEspecialidade"         : ""
    , "idClube"                         : ""
    , "Descricao"                       : ""
    , "DataInclusao"                : ""
    , "idUsuarioInclusao"       : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  : ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"EspecialidadeJogador" = {
      "idJogador"                       : ""
    , "idVersao"                        : ""
    , "idEspecialidade"         : ""
},
"Jogador" = {
        "idJogador"                     : ""
    , "idClube"                         : ""
    , "Nome"                                : ""
    , "DataNascimento"          : ""
    , "Peso"                                : ""
    , "Altura"                          : ""
    , "InicioContrato"          : ""
    , "TerminoContrato"         : ""
    , "Apelido"                         : ""
    , "idPais"                          : ""
    , "DataInclusao"                : ""
    , "idUsuarioInclusao"       : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  : ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"Pais" = {
        "idPais"                            : ""
    , "Nome"                                : ""
    , "Bandeira"                        : ""
},
"Perfil" = {
        "idPerfil"                      : ""
    , "idClube"                         : ""
    , "Descricao"                       : ""
},
"Posicao" = {
        "idPosicao"                     : ""
    , "Nome"                                : ""
    , "Sigla"                               : ""
},
"PosicaoJogador" = {
        "idJogador"                     : ""
    , "idPosicao"                       : ""
    , "Nivel"                               : ""
},
"Usuario" = {
        "idUsuario"                     : ""
    , "Nome"                                : ""
    , "Email"                               : ""
    , "CPF"                                 : ""
    , "DataNascimento"          : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  : ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"Versao" = {
        "idVersao"                      : ""
    , "idClube"                         : ""
    , "Nome"                                : ""
    , "InicioValidade"          : ""
    , "DataInclusao"                : ""
    , "idUsuarioInclusao"       : ""
    , "DataAlteracao"               : ""
    , "idUsuarioAlteracao"  : ""
    , "DataExclusao"                : ""
    , "idUsuarioExclusao"       : ""
},
"VinculoUsuarioPerfil" = {
        "idUsuario"                     : ""
    , "idPerfil"                        : ""
}
```