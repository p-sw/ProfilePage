# NextJS Deploy
FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000

ENTRYPOINT ["npm", "run", "start"]