FROM node:18

# Create app directory
WORKDIR /

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

#EXPOSE 9001
#CMD [ "node", "/server.ts" ]