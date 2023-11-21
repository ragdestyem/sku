FROM public.ecr.aws/docker/library/node:18.18.2

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json .
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

RUN npm run build

# CMD [ "node", "script.ts" ]

CMD [ "npm", "start" ]

