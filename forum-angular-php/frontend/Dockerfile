# Create image based on the official Node 10 image from dockerhub
FROM node:12

RUN mkdir /usr/src/app 
WORKDIR /usr/src/app
# Copy dependency definitions
# Install dependecies

RUN npm install -g @angular/cli @angular-devkit/build-angular @angular/core@13.0.3 @angular/compiler-cli@^13.0.0 typescript@>=4.4.3 @angular/compiler-cli@^13.0.0 ajv@^6.9.1 rxjs@^6.5.3 zone.js@~0.11.4 && npm install

COPY . .

RUN ng build --prod
