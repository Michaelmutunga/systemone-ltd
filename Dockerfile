# Build stage
FROM node:20-slim AS build
WORKDIR /app
RUN apt-get update && apt-get install -y \
    chromium fonts-liberation ca-certificates \
    && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV CHROME_PATH=/usr/bin/chromium
RUN npm ci
COPY . .
RUN npm run build
RUN npm run prerender
RUN npm prune --omit=dev

# Runtime stage
FROM node:20-slim
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
EXPOSE 8080
CMD ["sh", "-c", "exec npx serve -s dist -l ${PORT:-8080}"]