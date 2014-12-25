#!/usr/bin/env node

var thrustWindow = require('./')
var url = process.argv[2];
var width = 1024;
var height = 600;

if (process.argv[3])
  width = parseInt(process.argv[3]);

if (process.argv[4])
  height = parseInt(process.argv[4]);

thrustWindow(url, width, height);
