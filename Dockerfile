FROM node:20-alpine AS builder

WORKDIR /app

# CÀI ĐỦ TOOL CHO npm install
RUN apk add --no-cache \
  libc6-compat \
  python3 \
  make \
  g++

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# =========================

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.js ./

EXPOSE 3000
CMD ["npm", "start"]
