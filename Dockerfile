FROM node:latest
LABEL version=1.1.0

RUN npm -g config set user root

RUN npm install -g expo-cli

WORKDIR /app
ENV NODE_ENV development

COPY package.json yarn.lock app.json /app/
RUN yarn install

CMD ["yarn", "start"]
