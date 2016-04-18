# The build instructions for the illustrate-app image

# use latest node image
FROM node:latest

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install dependencies, npm is preinstalled from image
# in prod we'll want to ship the container with node_modules already there
# for now always get the latest version of dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# expose port 3000, we'll use port 3000 in express
EXPOSE 3000

# node index.js
# in prod we use pm2 to run process forever
CMD [ "node", "./src/index.js" ]
