FROM node:10-slim

EXPOSE 3001

RUN mkdir /opt/app && chown node:node /opt/app
WORKDIR /opt/app

USER node
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force

HEALTHCHECK --interval=30s CMD node healthcheck.js

COPY . .

CMD ["node", "index.js"]