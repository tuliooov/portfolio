# Back-end no front-end

## NextAuth.js
Authentication for Next.js
``` https://next-auth.js.org/ ```

## Banco de Dados
Para aplicações backends em serveless umas das opções sugeridas são:
[x] -- FaunaDB (Na qual vamos usar) 
[ ] -- DynamoDB - AWS

### FaunaDB (https://fauna.com/)
Para rodar banco de dados local, segue tutorial: https://docs.fauna.com/fauna/current/build/integrations/dev
```  yarn add faunadb ```

#### Linguagem fauna
This page provides a quick reference to all of the Fauna Query Language functions, grouped by their major functionality:
https://docs.fauna.com/fauna/current/api/fql/cheat_sheet


#### Webhook
O webhook, também conhecido como retorno de chamada web, é um método simples que facilita com que uma API forneça informações em tempo real sempre que um evento acontece. Em outras palavras, trata-se de um modo de receber dados entre dois sistemas de forma passiva, ou seja, sem realizar nenhuma ação.

``` stripe listen --forward-to localhost:3000/api/webhooks ```
