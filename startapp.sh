#!/bin/zsh

if(.env didnt exist) {
    cp. env.example .env
}
docker compose exec app php artisan migrate:reset
docker compose exec app php artisan migrate
docker compose exec app php artisan db:seed
