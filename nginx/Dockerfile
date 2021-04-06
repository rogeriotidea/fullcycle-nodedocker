FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx
RUN mkdir /var/www/html -p &&  touch /var/www/html/index.php

