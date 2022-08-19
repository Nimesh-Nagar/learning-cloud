FROM node:alpine
LABEL maintainer="n.nimesh02@gmail.com"
WORKDIR /usr/nimesh/subscriber
COPY mqtt_subscriber.js /usr/nimesh/subscriber
RUN npm install mqtt
CMD ["node", "mqtt_subscriber.js"]