# Use a imagem Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Construa a aplicação React
RUN npm run build

# Exponha a porta 80
EXPOSE 80

# Inicie o servidor web
CMD ["npm", "start"]
