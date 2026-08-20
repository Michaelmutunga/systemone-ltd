# Build stage
FROM node:20-slim AS build
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
    libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
    libgbm1 libasound2 libpango-1.0-0 libcairo2 libatspi2.0-0 \
    libx11-xcb1 libxcb1 libxext6 libxi6 libxtst6 \
    ca-certificates fonts-liberation \
    && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci
RUN npx puppeteer browsers install chrome
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