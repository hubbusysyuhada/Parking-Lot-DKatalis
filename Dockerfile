FROM node:14

WORKDIR  /parking_lot_2.0.0

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]