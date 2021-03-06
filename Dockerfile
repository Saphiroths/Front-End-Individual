FROM node:14.17.6-alpine as build-step
Run apk update && apk add bash
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
