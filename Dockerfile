FROM node:25-alpine
COPY . /memories/src
WORKDIR /memories/src
RUN npm i
RUN node migrate.ts
CMD ["node", "index.ts"]