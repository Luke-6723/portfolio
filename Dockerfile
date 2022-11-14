FROM node:16.13.2-alpine

RUN apk add git
RUN apk add bash

RUN apk update && apk add gnupg wget

WORKDIR /tmp

ADD ./src /tmp/src
ADD ./public /tmp/public
COPY ["tsconfig.json", "package.json", "/tmp/"]

RUN npm install npm@latest -g
RUN npm install serve -g
RUN npm install
RUN npm run build

COPY /tmp/build /data
RUN rm -rf /tmp

WORKDIR /data

RUN serve -s .

