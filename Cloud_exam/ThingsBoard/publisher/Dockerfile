FROM node:alpine
LABEL maintenaier="n.nimesh02@gmail.com"
WORKDIR /usr/nimesh/publisher
COPY mqtt_publish.js /usr/nimesh/publisher/
COPY mainData.json /usr/nimesh/publisher/
RUN npm install mqtt
CMD ["node", "mqtt_publish.js"]