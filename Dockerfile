FROM node:latest

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY api.js .

ENTRYPOINT [ "node" , "api.js"]