# Build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production runtime stage
FROM node:20-alpine AS runner

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
