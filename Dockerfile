FROM node:16.17.0-bullseye-slim

RUN apt-get update && apt-get upgrade -y

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]