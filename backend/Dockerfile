# FROM node:12

# # Create app directory, this is in our container/in our image
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# #RUN npm run build

# EXPOSE 1337

# #CMD [ "node", "dist/main" ]
# CMD [ "npm", "run" ,"start" ]

FROM strapi/base

WORKDIR /usr/src/app

COPY package*.json ./
# COPY ./package.json ./
# COPY ./yarn.lock ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 1337

CMD ["npm","run","start"]