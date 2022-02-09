FROM node:16.13.2-alpine3.15

ENV NODE_ENV=production

WORKDIR /app

ADD package.json package-lock.json .env ./

RUN npm install --production --ignore-scripts


ADD bin ./bin
ADD src ./src

CMD [ "npm", "start" ]