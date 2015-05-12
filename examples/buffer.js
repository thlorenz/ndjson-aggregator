'use strict';

var aggregate = require('../')

var lines = [
    '{"name":"buffers/buffer-creation","config":{"type":"fast","len":10,"n":1024},"time":"5400.10125"}'
  , '{"name":"buffers/buffer-creation","config":{"type":"fast","len":1024,"n":1024},"time":"2097.43265"}'
  , '{"name":"buffers/buffer-deletion","config":{"type":"fast","len":10,"n":1024},"time":"5400.10125"}'
  , '{"name":"buffers/buffer-deletion","config":{"type":"fast","len":1024,"n":1024},"time":"2097.43265"}'
  , '{"config":{"type":"fast","len":10,"n":1024},"time":"5400.10125"}'
  , '{"config":{"type":"fast","len":1024,"n":1024},"time":"2097.43265"}'
]

var res = aggregate(lines, 'name')
console.log(res)
