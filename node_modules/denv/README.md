denv
====
[![NPM version](https://img.shields.io/npm/v/denv.svg)](https://npmjs.org/package/denv)
[![NPM Downloads](https://img.shields.io/npm/dm/denv.svg)](https://npmjs.org/package/denv)

Easy load environment variables in your app inside docker container
-------------------------------------------------------------------

Installation
------------

```console
  $ npm install --save denv
```

USAGE
-----

```js
const denv = require('denv');

const { env, addr, port } = denv();

// Redis example
const conString = `redis://${env('redis_user', '')}\
:${env('redis_password', '')}\
@${addr('127.0.0.1')}\
:${port('6379')}\
/${env('db', 0)}`;

// Postgres example
const conString = `postgres://${env('postgres_user', 'postgres')}\
:${env('postgres_password', 'mysecretpassword')}\
@${addr('127.0.0.1')}\
:${port('5432')}\
/${env('database', 'postgres')}`;
```

Tests
-----

```console
  $ npm test
```

LICENSE
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
