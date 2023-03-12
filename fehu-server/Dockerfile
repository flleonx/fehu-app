FROM node:18.14.1-alpine3.17

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
