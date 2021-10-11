# # ---
# # Build Application
FROM node:14-alpine as builder
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

# # ---
# # Production stage
FROM node:14-alpine
WORKDIR /usr/app
COPY --from=builder /usr/app/package*.json ./
COPY --from=builder /usr/app/dist ./dist
RUN npm install --only=production
EXPOSE 8080
CMD ["npm", "start"]
