FROM node:14 AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY prisma ./prisma/

RUN npm install && npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3333

FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY  package*.json ./
COPY prisma ./prisma/

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3333

CMD ["npm", "run", "start:prod"]
