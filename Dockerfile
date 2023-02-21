FROM node:lts-alpine

# all files needed for the build
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "build"]