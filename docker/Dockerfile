FROM node:18.5.0-alpine3.15 AS node_modules
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . .

FROM node_modules AS prod_builder
RUN npm run build

## Production image
FROM nginx:1.23.0-alpine AS prod
COPY docker/etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/nginx/html/react-wordle
COPY --from=prod_builder /app/build /usr/share/nginx/html/react-wordle
COPY docker/build_system.sh .
RUN ./build_system.sh && rm ./build_system.sh
# port use by Nginx within docker network.
EXPOSE 8080
USER reactle