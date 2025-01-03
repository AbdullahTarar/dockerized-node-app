# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the contents of the `node-app` folder into the container
COPY node-app ./node-app

# Change to the `node-app` directory
WORKDIR /usr/src/app/node-app

# Install app dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 5000

# Command to start the app
CMD ["npm", "start"]
