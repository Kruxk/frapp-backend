This backend uses docker to setup the database and such

run this command to setup docker.
docker run --name frapp -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres
