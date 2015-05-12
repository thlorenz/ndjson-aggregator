'use strict';

var test = require('tape')
  , spok = require('spok')
  , ocat = require('ocat')
  , aggr = require('../')

ocat.opts = {
    prefix: '  spok(t, res,'
  , suffix: ')'
  , indent: '   '
}

function hasLength(n) {
  return function check(x) { return x.length === n }
}

test('\ngiven 12 lines first 4 and next 4 different name, last 4 no name, aggregating by name', function (t) {
  var lines = [
      '{"name":"buffers/buffer-creation","config":{"type":"fast","len":10,"n":1024},"time":"5400.10125"}'
    , '{"name":"buffers/buffer-creation","config":{"type":"fast","len":1024,"n":1024},"time":"2097.43265"}'
    , '{"name":"buffers/buffer-creation","config":{"type":"slow","len":10,"n":1024},"time":"1654.42867"}'
    , '{"name":"buffers/buffer-creation","config":{"type":"slow","len":1024,"n":1024},"time":"1021.59977"}'
    , '{"name":"buffers/buffer-deletion","config":{"type":"fast","len":10,"n":1024},"time":"5400.10125"}'
    , '{"name":"buffers/buffer-deletion","config":{"type":"fast","len":1024,"n":1024},"time":"2097.43265"}'
    , '{"name":"buffers/buffer-deletion","config":{"type":"slow","len":10,"n":1024},"time":"1654.42867"}'
    , '{"name":"buffers/buffer-deletion","config":{"type":"slow","len":1024,"n":1024},"time":"1021.59977"}'
    , '{"config":{"type":"fast","len":10,"n":1024},"time":"5400.10125"}'
    , '{"config":{"type":"fast","len":1024,"n":1024},"time":"2097.43265"}'
    , '{"config":{"type":"slow","len":10,"n":1024},"time":"1654.42867"}'
    , '{"config":{"type":"slow","len":1024,"n":1024},"time":"1021.59977"}'
  ]

  var res = aggr(lines, 'name')

  spok(t, res, {
      'buffers/buffer-creation' : hasLength(4)
    , 'buffers/buffer-deletion' : hasLength(4)
    , 'ENOEXIST name'           : hasLength(4)
  })
  spok(t, res['buffers/buffer-creation'][0],
    { name: 'buffers/buffer-creation'
    , config: spok.definedObject
    , time: '5400.10125'
  })
  spok(t, res['buffers/buffer-creation'][3],
    { name: 'buffers/buffer-creation'
    , config: { type: 'slow', len: 1024, n: 1024 }
    , time: '1021.59977'
  })
  spok(t, res['buffers/buffer-deletion'][0],
    { name: 'buffers/buffer-deletion'
    , config: { type: 'fast', len: 10, n: 1024 }
    , time: '5400.10125'
  })
  spok(t, res['buffers/buffer-deletion'][3],
    { name: 'buffers/buffer-deletion'
    , config: { type: 'slow', len: 1024, n: 1024 }
    , time: '1021.59977'
  })
  spok(t, res['ENOEXIST name'][0],
    { config: { type: 'fast', len: 10, n: 1024 }
    , time: '5400.10125'
  })
  spok(t, res['ENOEXIST name'][3],
    { config: { type: 'slow', len: 1024, n: 1024 }
    , time: '1021.59977'
  })
  t.end()
})
