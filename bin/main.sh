#!/usr/bin/env node

var u = require("../index");
console.log(JSON.stringify(u.uniqueid(parseInt(process.argv[2]))));
