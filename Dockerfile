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

FROM halverneus/static-file-server

COPY --from=base /tmp/build /web

ENV PORT=8888
ENV FOLDER=/web
CMD serve
