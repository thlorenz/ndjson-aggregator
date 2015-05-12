# ndjson-aggregator [![build status](https://secure.travis-ci.org/thlorenz/ndjson-aggregator.png)](http://travis-ci.org/thlorenz/ndjson-aggregator)

[![testling badge](https://ci.testling.com/thlorenz/ndjson-aggregator.png)](https://ci.testling.com/thlorenz/ndjson-aggregator)

Aggregates ndjson output into one JSON object, keyed by a given property.

```js
var aggregate = require('ndjson-aggregator')

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
```

```
{ 'buffers/buffer-creation':
   [ { name: 'buffers/buffer-creation',
       config: { type: 'fast', len: 10, n: 1024 },
       time: '5400.10125' },
     { name: 'buffers/buffer-creation',
       config: { type: 'fast', len: 1024, n: 1024 },
       time: '2097.43265' } ],
  'buffers/buffer-deletion':
   [ { name: 'buffers/buffer-deletion',
       config: { type: 'fast', len: 10, n: 1024 },
       time: '5400.10125' },
     { name: 'buffers/buffer-deletion',
       config: { type: 'fast', len: 1024, n: 1024 },
       time: '2097.43265' } ],
  'ENOEXIST name':
   [ { config: { type: 'fast', len: 10, n: 1024 },
       time: '5400.10125' },
     { config: { type: 'fast', len: 1024, n: 1024 },
       time: '2097.43265' } ] }
```

## Installation

    npm install ndjson-aggregator

## CLI

A cli tool name `ndja` will be in your path if you install this package globally.

It takes a stream of ndjson data from *stdin* and outputs aggregated JSON to *stdout*.

```sh
ndja <property> < in-ndjson.data > out.json 

## Example

ndja name < examples/ndjson.data > out.json 
```

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="aggregate"><span class="type-signature"></span>aggregate<span class="signature">(lines, <span class="optional">prop</span>)</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Aggregates lines of <a href="http://ndjson.org/">new line delimited JSON</a> into
one JavaScript object keyed by a property if it is supplied.</p>
<p>If the key property is not supplied all ndjson lines will just be
aggregated into one Array.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>lines</code></td>
<td class="type">
<span class="param-type">Array.&lt;String></span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>ndjson lines (each line must be parseable JSON)</p></td>
</tr>
<tr>
<td class="name"><code>prop</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>the property to key the aggregated JSON by</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/ndjson-aggregator/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/ndjson-aggregator/blob/master/index.js#L24">lineno 24</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>ndjson aggregated into one JavaScript Object</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
