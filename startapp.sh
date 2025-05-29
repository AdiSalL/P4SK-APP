#!/bin/zsh

echo "⏳ Resetting Laravel application..."

# Stop on error
set -e

# Reset all migrations
echo "🔄 Resetting database migrations..."
docker compose exec app php artisan migrate:reset --force

# Re-run all migrations
echo "⚙️ Running migrations..."
docker compose exec app php artisan migrate --force

# Optionally clear config, route, and view cache
echo "🧹 Clearing caches..."
docker compose exec app php artisan config:clear
docker compose exec app php artisan route:clear
docker compose exec app php artisan view:clear

# Reset all seeders (custom command or manual truncation, if needed)
# Laravel doesn't have db:seed:reset by default
echo "🌱 Reseeding database..."
docker compose exec app php artisan db:seed --force

echo "✅ Laravel reset complete."
