# NextJS Deploy
FROM node:19.3.0-alpine3.16

WORKDIR /app

COPY ./frontend/package*.json /app

RUN npm install

# Bundle app source
COPY ./frontend/ /app/

EXPOSE 5000

RUN ["npm", "run", "build"]

ENTRYPOINT ["npm", "run", "start"]
