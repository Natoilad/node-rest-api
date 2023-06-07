# node
FROM node16.17.0

# папка
WORKDIR /app

# звідки корінь->корінь
COPY . .

# залежності
RUN npm instal

EXPOSE  3000

CMD [ "npm", "start" ]
 