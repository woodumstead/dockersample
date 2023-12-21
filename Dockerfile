

FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

ENV PORT=1941

EXPOSE 1941

CMD [ "npm", "start" ]