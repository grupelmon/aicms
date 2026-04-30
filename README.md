# AICMS API-first Laravel + React stack

## Stack
- Laravel 11 API backend (Sanctum auth)
- MySQL 8.4
- Redis for sessions and cache
- React + Vite backoffice consuming API only
- Docker Compose orchestration

## Project structure
- `backend/` Laravel API skeleton and modules
- `frontend/` React backoffice
- `docker/` nginx config
- `docker-compose.yml` service definitions

## Quick start
1. Copy environment:
   - `cp backend/.env.example backend/.env`
2. Start containers:
   - `docker compose up -d --build`
3. Install backend dependencies:
   - `docker compose exec app composer install`
4. Generate app key and run migrations:
   - `docker compose exec app php artisan key:generate`
   - `docker compose exec app php artisan migrate`
5. Install frontend dependencies and run Vite:
   - Already handled by `frontend` container command on startup.

## API authentication
- Login endpoint: `POST /api/v1/admin/login`
- Body:
```json
{ "email": "admin@example.com", "password": "password" }
```
- Returns Bearer token for subsequent API requests.

## Protected API routes
- `POST /api/v1/logout`
- `GET /api/v1/posts`
- `POST /api/v1/posts`
- `GET /api/v1/posts/{id}`
- `PUT/PATCH /api/v1/posts/{id}`
- `DELETE /api/v1/posts/{id}`

## Backoffice pages
- `/login` admin login form
- `/posts` protected posts list + create form

## Notes
- Ensure an admin user exists with `is_admin = 1`.
- Sanctum token auth is used with `auth:sanctum` middleware.
