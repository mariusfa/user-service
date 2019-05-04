# User service
This is a project with both an api and a client. The idea is a service to handle user register, login and validate token

For the api setup see [here](server/README.md)

For the client setup see [here](client/README.md)

### Docker compose
This project has a `docker-compose.yml` file. This will also build the project for you if needed. However might not be useful for production. Dockerfiles might not be fully optimized and might need a production `docker-compose.yml`

Docker-compose is not included in docker installation. Docker-compose need to be installed seperately.

#### Build with docker compose
```bash
# For updating images with changes
docker-compose build
```
#### Start everything
```bash
# This will build if it is the first time
docker-compose up -d
```
#### Clean everything up
```bash
# Removing containers and networks
docker-compose down
```
#### Only staring mongodb
This might be useful for local development without installing mongodb
```bash
# Starting mongodb
docker-compose up -d mongo
# Shutting down mongodb
dcoker-compose down
```