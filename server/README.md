# User service api application
Backend for user-service. Possible frontend is user-service client.

### Prerequisites
MongoDB is needed for this application.
How to setup mongodb:
```bash
docker pull mongo:3.6
docker run -d --name mongo -p 27017:27017 mongo:3.6
```
`--network="user"` is required if running api in docker. For running api on without docker, `network` is not required.

How to create docker network if not exists:
```bash
# View docker networks
docker network ls
# Create network
docker network create user
```
Staring mongodb with docker network:
```bash
docker run -d --name mongo --network="user" -p 27017:27017 mongo:3.6
```

### Getting started
Install npm packages:
```bash
npm install
```
A few global packages are needed:
```bash
npm i -g mocha
npm i -g nodemon
```

Run application: 
```bash
npm start
```
All of the REST endpoints are public to be used.
Default startup of api is at `localhost:3001`

#### Running tests
`Mocha` and `Chai` used for testing. Since the `esm` module is ued, the tests are run with `--require esm`

Run tests:
```bash
npm test
```

### Building Docker image
#### Dev/prod image
This will build a dev image:
```bash
docker build -t user-service-server .
```

### Staring docker image
For running api in docker image, mongodb need to be setup with docker network. 
```bash
# Start api
docker run -d --name api --network="user" -p 3001:3001 user-service-server:latest
```
### Configuration
Application can be conigured by env vars:

| Variable | Default |
|----------|---------|
| DB_HOST | localhost |
| PORT | 3000 |

