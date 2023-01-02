# NextJS Deploy
FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install

# Bundle app source
COPY ./frontend .

RUN chmod +x ./docker-entrypoint.sh

EXPOSE 5000

ENTRYPOINT ["./docker-entrypoint.sh"]