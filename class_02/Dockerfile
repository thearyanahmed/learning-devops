FROM ubuntu

RUN apt update
RUN apt install nginx -y

COPY index.html /var/www/html

CMD ["nginx","-g","daemon off;"]