# Use the official PHP image as a base image
FROM php:7.4-apache

# Install additional PHP extensions if needed
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy your PHP application into the Docker container
COPY . /var/www/html/

# Set permissions for the web server
RUN chown -R www-data:www-data /var/www/html/

# Expose port 80 for the web server
EXPOSE 80