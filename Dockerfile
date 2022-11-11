FROM node:14.21-alpine
WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 1337
CMD [ "npm", "run", "develop" ]
