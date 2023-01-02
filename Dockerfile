# NextJS Deploy
FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install

# Bundle app source
COPY ./frontend .

RUN chmod +x /app/docker-entrypoint.sh

EXPOSE 5000

ENTRYPOINT ["/app/docker-entrypoint.sh"]