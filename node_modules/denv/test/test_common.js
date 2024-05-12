'use strict';

var assert = require('assert');

describe('Link without alias', function() {
  const envData = {
    SOME_POSTGRES_PORT: 'tcp://172.17.0.2:5432',
    SOME_POSTGRES_PORT_5432_TCP: 'tcp://172.17.0.2:5432',
    SOME_POSTGRES_PORT_5432_TCP_ADDR: '172.17.0.2',
    SOME_POSTGRES_PORT_5432_TCP_PORT: '5432',
    SOME_POSTGRES_PORT_5432_TCP_PROTO: 'tcp',
    SOME_POSTGRES_NAME: '/nostalgic_mestorf/some-postgres',
    SOME_POSTGRES_ENV_POSTGRES_PASSWORD: 'mysecretpassword',
    SOME_POSTGRES_ENV_POSTGRES_USER: 'test',
    SOME_POSTGRES_ENV_no_proxy: '*.local, 169.254/16',
    SOME_POSTGRES_ENV_SOME_NAME: 'SOME_NAME'
  };
  const { addr, env, proto, port } = require('../index.js')(null, envData);

  it('should return port', function() {

    assert.strictEqual(port(), '5432');
  });

  it('should return addr', function() {
    assert.strictEqual(addr(), '172.17.0.2');
  });

  it('should return proto', function() {
    assert.strictEqual(proto(), 'tcp');
  });

  it('should return postgres_user', function() {
    assert.strictEqual(env('postgres_user'), 'test');
  });

  it('should return postgres_password', function() {
    assert.strictEqual(env('postgres_password'), 'mysecretpassword');
  });

  it('should return no_proxy', function() {
    assert.strictEqual(env('no_proxy'), '*.local, 169.254/16');
  });
});

describe('Link with alias', function() {
  const envData = {
    QWER_PORT: 'tcp://172.17.0.2:5432',
    QWER_PORT_5432_TCP: 'tcp://172.17.0.2:5432',
    QWER_PORT_5432_TCP_ADDR: '172.17.0.2',
    QWER_PORT_5432_TCP_PORT: '5432',
    QWER_PORT_5432_TCP_PROTO: 'tcp',
    QWER_NAME: '/determined_golick/qwer',
    QWER_ENV_POSTGRES_PASSWORD: 'mysecretpassword',
    QWER_ENV_POSTGRES_USER: 'test',
    QWER_ENV_no_proxy: '*.local, 169.254/16'
  };

  const { addr, env, proto, port } = require('../index.js')('qwer', envData);

  it('should return port', function() {

    assert.strictEqual(port(), '5432');
  });

  it('should return addr', function() {
    assert.strictEqual(addr(), '172.17.0.2');
  });

  it('should return proto', function() {
    assert.strictEqual(proto(), 'tcp');
  });

  it('should return postgres_user', function() {
    assert.strictEqual(env('postgres_user'), 'test');
  });

  it('should return postgres_password', function() {
    assert.strictEqual(env('postgres_password'), 'mysecretpassword');
  });

  it('should return no_proxy', function() {
    assert.strictEqual(env('no_proxy'), '*.local, 169.254/16');
  });
});
