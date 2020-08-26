'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

var React = require('react');
require('../style/style.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
var Button = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement("button", { className: 'button' }, children);
};

module.exports = Button;
