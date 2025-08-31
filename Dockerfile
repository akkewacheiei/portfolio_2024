# ---------- Build Stage ----------
FROM node:18-alpine AS builder

# set working directory
WORKDIR /app

# copy package.json และ lock file
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code
COPY . .

# build project
RUN npm run build


# ---------- Production Stage ----------
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV production

# copy only needed files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# expose port
EXPOSE 3000

# start next.js app
CMD ["npm", "start"]
