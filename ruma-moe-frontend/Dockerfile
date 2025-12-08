FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build


FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
