FROM node:17.7.1-alpine3.14 AS node_modules
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . .

FROM node_modules AS prod_builder
RUN npm run build

## Production image
FROM nginx:1.21.6-alpine AS prod
COPY docker/etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=prod_builder /app/build /usr/share/nginx/html
COPY docker/build_system.sh .
RUN chmod 755 ./build_system.sh && ./build_system.sh && rm ./build_system.sh
# port use by Nginx within docker network.
EXPOSE 8080
USER reactle

## Development image
FROM node_modules AS dev
EXPOSE 3000
CMD npm run start
