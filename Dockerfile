FROM nginx:1.21.5-alpine as build

RUN apk update && \
    apk add --no-cache \ 
    wget && \
    rm -rf /var/cache/apk/* && rm -rf /tmp/*

RUN mkdir /wordle && cd /wordle && wget -v -m https://www.powerlanguage.co.uk/wordle/

RUN cp -R /wordle/www.powerlanguage.co.uk/wordle/. /usr/share/nginx/html/
COPY conf/nginx-site.conf /etc/nginx/conf.d/default.conf

FROM nginx:1.21.5-alpine

COPY --from=build /usr/share/nginx/html/ /usr/share/nginx/html/
COPY --from=build /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 8080

HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=10s \
    CMD curl -fSs 127.0.0.1:80/healthz || exit 1