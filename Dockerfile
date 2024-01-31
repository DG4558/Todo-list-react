# Use the official Node.js image as the base image
FROM node:14 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a smaller image for serving the static files
FROM node:14-alpine

# Set the working directory in the second stage
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/build ./build

# Install serve to serve the static files
RUN npm install -g serve

# Expose the port that serve will use
EXPOSE 3000

# Define the command to run when the container starts
CMD ["serve", "-s", "build", "-l", "3000"]

