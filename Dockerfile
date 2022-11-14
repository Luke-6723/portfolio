FROM node:16.13.2-alpine as base
RUN apk add git
RUN apk add bash
RUN apk update && apk add gnupg wget
WORKDIR /tmp
ADD ./src /tmp/src
ADD ./public /tmp/public
COPY ["tsconfig.json", "package.json", "/tmp/"]
RUN npm install serve npm@latest -g
RUN npm install && npm run build
RUN mkdir sws

FROM joseluisq/static-web-server:latest

COPY --chown=0:0 --from=base /tmp/build/ /sws

CMD [ "-d /sws/web/" ] 
