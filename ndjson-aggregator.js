'use strict';

var ndjson = require('ndjson');

function aggregateByProp(lines, prop) {
  var acc = {}, propVal, obj
  for (var i = 0, len = lines.length; i < len; i++) {
    obj = JSON.parse(lines[i]);
    propVal = obj[prop] || 'ENOEXIST ' + prop
    if (typeof acc[propVal] === 'undefined') acc[propVal] = [];
    acc[propVal].push(obj)
  }
  return acc;
}

function aggregateWithoutProp(lines) {
  var acc = [];
  for (var i = 0, len = lines.length; i < len; i++) {
    acc.push(JSON.parse(lines[i]))
  }
  return acc;
}

/**
 * Aggregates lines of [new line delimited JSON](http://ndjson.org/) into
 * one JavaScript object keyed by a property if it is supplied.
 *
 * If the key property is not supplied all ndjson lines will just be
 * aggregated into one Array.
 * 
 * @name aggregate
 * @function
 * @param {Array.<String>} lines ndjson lines (each line must be parseable JSON)
 * @param {String=} prop the property to key the aggregated JSON by
 * @return {Object} ndjson aggregated into one JavaScript Object
 */
var go = module.exports = function aggregate(lines, prop) {
  return typeof prop === 'undefined' 
    ? aggregateWithoutProp(lines)
    : aggregateByProp(lines, prop)
}
