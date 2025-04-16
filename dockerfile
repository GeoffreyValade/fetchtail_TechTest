FROM node:18 AS builder

WORKDIR /var/www/html/app

COPY package*.json ./
RUN npm install

COPY . /var/www/html/app
RUN npm run build

CMD [ "npm", "run", "dev", "--host", "0.0.0.0" ]