# Use uma imagem Node.js mais recente
FROM node:16

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json (se existirem)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar os arquivos restantes do projeto
COPY . .

# Comando para iniciar a aplicação
CMD ["npm", "start"]
