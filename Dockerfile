# Use official Next.js image for optimized builds
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Final lightweight image
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]
