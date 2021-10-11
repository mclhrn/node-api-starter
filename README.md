# Static Image Server

Simple nodejs application to serve images for the devfile registry. Uses hardcoded images in memory. Add database functionality as needed.

## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run build
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/images` endpoint 
  ```shell
  curl http://localhost:8001/api/v1/images
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```shell
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file

## Deploy on Openshift

```
oc login <cluster addr>:<cluster port> --token=<abc…>

// Create a new project or add to existing
oc new-project devfile-registry

oc new-app <bitbucket url for this repo> --name service-image-server

oc get svc service-image-server

oc expose svc/service-image-server
```

<!-- TODO -->
// Add process envs to `.env` file
// Add config map to openshift deploy stage