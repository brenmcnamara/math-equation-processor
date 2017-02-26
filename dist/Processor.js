'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CoreProcessors = require('./CoreProcessors');

var _CoreProcessors2 = _interopRequireDefault(_CoreProcessors);

var _mathEquationParser = require('math-equation-parser');

var _mathEquationParser2 = _interopRequireDefault(_mathEquationParser);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Processor = function () {
  _createClass(Processor, null, [{
    key: 'evaluate',
    value: function evaluate(text) {
      return new Processor().evaluate(text);
    }
  }]);

  function Processor(config) {
    _classCallCheck(this, Processor);
  }

  _createClass(Processor, [{
    key: 'evaluate',
    value: function evaluate(text) {
      var operator = _mathEquationParser2.default.parse(text);
      return evaluator(operator);
    }
  }]);

  return Processor;
}();

exports.default = Processor;


function evaluator(operator) {
  var payloadByTypes = _CoreProcessors2.default[operator.type];
  _assert2.default.ok(payloadByTypes, 'Missing payload types ' + operator.type);
  var payload = payloadByTypes[operator.name];
  _assert2.default.ok(payload, 'No operator found for ' + operator.type);
  _assert2.default.ok(typeof payload.evaluate === 'function', 'Payload should have evaluate method');
  return payload.evaluate(evaluator, operator, payload);
}