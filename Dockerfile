FROM public.ecr.aws/docker/library/node:18.18.2

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json .
RUN npm install

COPY . .


EXPOSE 3000

# CMD [ "node", "script.ts" ]

CMD [ "npm", "run","dev" ]

