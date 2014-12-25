#!/usr/bin/env node

var thrust = require('node-thrust');

var url = process.argv[2];
var width = 1024;
var height = 600;

if (process.argv[3])
  width = parseInt(process.argv[3]);

if (process.argv[4])
  height = parseInt(process.argv[4]);

thrust(function(err, api) {
  var win = api.window({
    root_url: url,
    size: {
      width: width,
      height: height
    }
  })
  win.show();
  win.focus();
});
