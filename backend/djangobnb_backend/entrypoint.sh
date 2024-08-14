#!/bin/sh

echo "Script started..."

if [ "$DATABASE" = "postgres" ]; then
    echo "Checking if database is running..."

    while ! nc -z "$SQL_HOST" "$SQL_PORT"; do
        echo "Waiting for database..."
        sleep 0.1
    done

    echo "Database is up and running :D"
fi

echo "Running migrations..."
python manage.py makemigrations

echo "Applying migrations..."
python manage.py migrate

echo "Starting server..."
python manage.py runserver 0.0.0.0:8000

exec "$@"