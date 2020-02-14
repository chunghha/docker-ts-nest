ARG NODE_VERSION=12

FROM keymetrics/pm2:${NODE_VERSION}-alpine
# set api port from env var
ENV API_PORT $API_PORT

# Create own api folder
RUN mkdir -p /api
WORKDIR /api

# Install the dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm i -g yarn
COPY package.json .
RUN yarn

# Build the API
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY env env/
COPY src src/
RUN yarn build

# Expose the API port
EXPOSE $API_PORT

# Run the API with pm2
COPY ecosystem.config.js .
ENTRYPOINT [ "pm2-runtime" ]
CMD [ "start", "ecosystem.config.js" ]
