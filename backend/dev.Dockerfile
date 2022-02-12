FROM node:16.13.2-alpine3.15

RUN npm install -g nodemon

WORKDIR /app

ADD package.json package-lock.json .env ./

RUN npm install


ADD bin ./bin

CMD [ "nodemon" ]
