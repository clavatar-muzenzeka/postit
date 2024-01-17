FROM node:20.11 as server
# Set the working directory
WORKDIR /app
COPY ./package.json /app/
COPY ./package-lock.json /app/
COPY ./ /app/

# Install all the dependencies
RUN npm install --force

FROM mongo:4.4 as db
WORKDIR /app
COPY --from=server /app ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

