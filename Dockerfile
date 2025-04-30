# Use official PHP image with required extensions
FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip unzip \
    curl \
    git \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-install pdo pdo_mysql gd 
# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy Entrypoin SH enable permission
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

    # Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql gd

# Install Node.js and npm
# RUN apt-get update && apt-get install -y nodejs npm

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - 
    RUN apt-get install -y nodejs

# Set working directory
WORKDIR /var/www

# Copy application files
COPY . .

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set file permissions
RUN chmod -R 775 /var/www/storage /var/www/bootstrap/cache \
    && chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache


# Expose PHP-FPM port
EXPOSE 9000

CMD ["php-fpm"]
