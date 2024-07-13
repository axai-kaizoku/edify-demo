# Use Node.js 18.17.0 runtime as a parent image
FROM node:18.17.0

# Set the working directory
WORKDIR /application

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]