# FROM node:12.13-alpine As development
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=development
# COPY . .
# RUN npm run build
# FROM node:12.13-alpine as production
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# COPY --from=development /usr/src/app/dist ./dist
# CMD ["node", "dist/main"]


FROM node:16
# Create app directory
WORKDIR /api/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
EXPOSE 8999
CMD [ "npm", "run", "dev" ]