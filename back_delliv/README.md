# Delliv Challenge - Backend

Este é o backend desenvolvido para o desafio Delliv. Ele fornece uma API RESTful para gerenciar pedidos de clientes. A aplicação foi construída utilizando o framework NestJS, TypeScript, e o banco de dados PostgreSQL através do Prisma.

## Configuração do Ambiente

Antes de começar, certifique-se de ter o Node.js e o Docker instalados na sua máquina.

1. **Clone o repositório:**

   ```
   git clone https://github.com/felipeat07/back_delliv.git
  ```

2. **Acesse o diretório do projeto:**

   ```
   cd back_delliv
  ```

3. **Instale as dependências:**

   ```
   npm install
  ```

4. **Configure o banco de dados no arquivo .env com suas credenciais::**

  ```
  DATABASE_URL=postgresql://seu-usuario:senha@localhost:5432/seu-banco-de-dados
  ```

  Substitua seu-usuario, senha e seu-banco-de-dados pelos valores correspondentes.

5. **Execute as migrações do Prisma para criar o esquema no banco de dados:**

  ```
  npx prisma migrate dev
  ```

6. **Inicie a apliação:**

  ```
  npm run start 
  ```

A aplicação estará disponível em http://localhost:3000.

## EndPoints

### Autenticação

#### POST /auth/login

Autentica um usuário e retorna um token JWT.

Exemplo de requisição:

  ```
  curl -X POST -H "Content-Type: application/json" -d '{ "email": "seu-email@example.com","password": "sua-senha"}' http://localhost:3000/auth/login
  ```
### Pedidos

#### GET /orders

Retorna todos os pedidos.

Exemplo de requisição:

  ```
  curl -H "Authorization: Bearer SEU_TOKEN_JWT" http://localhost:3000/orders
  ```

#### POST /orders

Cria um novo pedido.

Exemplo de requisição:

  ```
  curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer SEU_TOKEN_JWT" -d '{
  "nomeCliente": "Nome do Cliente",
  "enderecoEntrega": "Endereço de Entrega",
  "statusPedido": "Pendente"
  }' http://localhost:3000/orders
  ```

#### PUT /orders/:id/status

Atualiza o status de um pedido.

Exemplo de requisição:

  ```
    curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer SEU_TOKEN_JWT" -d '{
  "status": "Concluído"
  }' http://localhost:3000/orders/1/status
  ```

### Testes Unitários

A aplicação possui testes unitários desenvolvidos com o framework Jest. Para executar os testes, utilize o seguinte comando:

  ```
    npm test
  ```

Esse comando irá executar todos os testes unitários definidos na aplicação.