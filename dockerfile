FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app
RUN npm install
RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "dev" ]