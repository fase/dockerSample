FROM node

EXPOSE 8080

COPY index.js /root/index.js
COPY package.json /root/package.json

RUN cd /root \
  && npm install

CMD node /root/index.js 
