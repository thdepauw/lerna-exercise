"use strict";

const hello = require("lib-1");
const goodbye = require("lib-2");

module.exports = talk;

function talk() {
  hello();
  goodbye;
}
