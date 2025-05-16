## **Prerequisites**

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
v 10.5.0
v 20.10.0
```

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## **Installation**

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://bitbucket-private-repo
```

To install and set up the library, run:

```sh
$ node --version
$ npm install
```
## **Usage**

### Serving the app

```sh
$ npm run dev
```
### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder


### Call contract endpoint, set ETHEREUM_RPC_URL environment variable. I used https://mainnet.infura.io/v3/<token>
```sh
ETHEREUM_RPC_URL='https://mainnet.infura.io/v3/<token>' npm run dev
```

```sh
curl --request GET \
  --url http://localhost:8000/api/contract/0x6F6CD7E2139428848485236094d69B2BD9b313FA
```
#### Result
```json
{
	"owner": "0x35c8c8DC23ae5B419EA01Ec74058A45DB0B1e9E5",
	"balance": "0.00001"
}
```
