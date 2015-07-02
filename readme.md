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
|	/users      |   POST	 | username, password				|
|-------------|----------|--------------------------|
|	/user/:id		|   POST	 |                          |
|-------------|----------|--------------------------


 ## TODO: Criar .get do `/user/:id`