## Sofia - RCDev's Restfull, JWT Authed, API Starter Project with MondoDB and ExpressJS
---

1. Copiar o arquivo `config.json.sample` para `config.json`, alterando parâmetros de configuração necessários.

2. `npm install`

3. `node server`

```
---/
-----/api
--------/logic
----------/entidade
-------------index.js
-------------model.js
------------/functions
--------/routes
-----.config.json
```

#### Rotas Padrão
---

1. /users 

	- `.post()` cria novo user com username e password

	- `.get()` lista user (verifica se está logado E se é admin)

2. /profiles/:id
 
 - `.post()` com USERID para criar
 
 - `.get()` com PROFILEID para visualizar single

|    ROUTE    |   VERB   |  			 PARAMS	 				  |
|-------------|----------|--------------------------|
|	/login      |   POST	 | username, password				|
|	/users      |   POST	 | username, password				|
|	/users			|   GET		 |                          |
|	/user/:id		|   GET		 |                          |
|/profile/:id |   POST   | :id = userID             |
|/profile/:id |   GET    | :id = profileID          |

 ## TODO: Criar .get do `/user/:id`