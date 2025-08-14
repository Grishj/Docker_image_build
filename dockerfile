FROM node:24-alpine3.21
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm","run", "dev" ]
