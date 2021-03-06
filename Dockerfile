FROM node:latest
LABEL version=1.1.0

EXPOSE 19000
EXPOSE 19001

ENV ADB_IP="10.0.2.2"
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.0.121"

RUN apt-get update

WORKDIR /app

COPY package.json yarn.lock app.json ./
RUN yarn --network-timeout 100000
CMD adb connect $ADB_IP && \
    yarn run android
