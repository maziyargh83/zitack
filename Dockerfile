FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY /client/package*.json ./client/

RUN npm run install

COPY . .
COPY ./client/ ./client/

EXPOSE 3000

CMD ["npm","run","dev"]