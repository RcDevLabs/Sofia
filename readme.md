## Sofia - RCDev's Restfull, JWT Authed, API Starter Project with MongoDB and ExpressJS
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

|ROUTE|VERB|PARAMS|Description|
|-----|----|------|-----------|
|	/login      |   POST	 | username, password| Logs in and gets token
|	/users      |   POST	 | username, password				| Creates new user
|	/users			|   GET		 |  x-access-token          | List users (admin only)
|	/user/:id	|  GET | x-access-token   | Gets user info
|/profile/:id |   POST   | :id = userID  | creates new profile from userID and attaches it to users schema
|/profile/:id |   GET    | :id = profileID          | show profile + user schema's info
|/me |   GET    |           | shows self information (logged in only)

 ## TODO: Criar .get do `/user/:id`