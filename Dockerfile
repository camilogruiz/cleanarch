FROM node:16.13.1-alpine3.14
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", ".env", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]