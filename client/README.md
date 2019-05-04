# User service react application
Frontend for interacting with user-service api

### Getting started
Install npm packages:
```bash
npm install
```
Run application: 
```bash
npm start
```
Application will start up on `localhost:3000`. Api is expected by default to be run at `localhost:3001`.
See api readme for starting up api.

#### Running tests
React `jest` is used for the tests.

Run tests:
```bash
npm test
```

### Building Docker
#### Dev  image
This will build a dev image:
```bash
docker build -t user-service-client .
```
For this image `npm build` is not done. Only `npm start`.

### Configuration
Application can be conigured by env vars:

| Variable | Default |
|----------|---------|
| REACT_API_URL | http://localhost:3001 |
| PORT | 3000 |