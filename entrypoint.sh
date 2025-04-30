#!/bin/bash

# Ensure the correct permissions for storage and bootstrap/cache
echo "Fixing permissions for storage and cache..."
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Create the laravel.log file if it doesn't exist
if [ ! -f /var/www/storage/logs/laravel.log ]; then
    echo "Creating laravel.log..."
    touch /var/www/storage/logs/laravel.log
    chown www-data:www-data /var/www/storage/logs/laravel.log
    chmod 664 /var/www/storage/logs/laravel.log
fi

# Run the original command
exec "$@"
