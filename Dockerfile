FROM node:6

RUN npm install -g grunt-cli \
    && groupadd localgroup -g 1000 && useradd -u 1000 -r -g localgroup localuser --create-home
# RUN npm install -g grunt-cli bower && groupadd -r localgroup && useradd -r -g localgroup localuser --create-home

EXPOSE 7777

USER localuser

WORKDIR /portfolio-template/site
