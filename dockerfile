FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app
RUN npm run build

EXPOSE 8000