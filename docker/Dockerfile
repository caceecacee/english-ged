FROM node:22-alpine
WORKDIR /app
COPY docker/scores-logic.mjs docker/store.mjs docker/server.mjs ./
COPY docs/ ./public/
COPY docker/config.js ./public/config.js
COPY docker/admin.html ./public/admin.html
ENV PORT=8080
ENV DATA_FILE=/data/scores.db
VOLUME ["/data"]
EXPOSE 8080
CMD ["node", "server.mjs"]
