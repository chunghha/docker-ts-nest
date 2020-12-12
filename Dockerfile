ARG NODE_VERSION=14

FROM keymetrics/pm2:${NODE_VERSION}-alpine
# set api port from env var
ENV API_PORT $API_PORT

# defaults to local, compose overrides this to either dev, qa or prod
ARG NODE_ENV=local
ENV NODE_ENV $NODE_ENV

# Create own api folder
RUN mkdir -p /api
WORKDIR /api

# Install the dependencies
ENV NPM_CONFIG_LOGLEVEL warn
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
RUN echo ${NODE_ENV} > node_env
COPY ecosystem.config.js .
ENTRYPOINT [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "${NODE_ENV}"]
