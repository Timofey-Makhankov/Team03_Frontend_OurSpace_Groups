FROM node:16-alpine AS builder
LABEL author="Timofey Makhankov"

WORKDIR /app
COPY package.json .
COPY .env.production .
COPY ./public ./public
COPY ./src ./src

RUN yarn install --production
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY .env.production .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=3s --timeout=5s \
    CMD ping -c 1 localhost:8080

CMD ["nginx", "-g", "daemon off;"]
