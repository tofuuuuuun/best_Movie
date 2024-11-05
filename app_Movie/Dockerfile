ARG NODE_VER
FROM node:${NODE_VER}

USER node
WORKDIR /home/node/app_Movie
RUN mkdir node_modules

CMD ["/bin/bash", "-c", "yarn install && yarn dev"]