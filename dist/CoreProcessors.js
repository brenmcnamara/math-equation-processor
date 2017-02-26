'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Literal = {
  type: 'Literal',
  name: 'Literal',
  evaluate: function evaluate(evaluator, operator, payload) {
    return operator;
  }
};

var Sum = {
  type: 'BinaryOperator',
  name: 'Sum',
  evaluate: function evaluate(evaluator, operator, payload) {
    var left = operator.left,
        right = operator.right;

    var evalLeft = evaluator(left);
    var evalRight = evaluator(right);
    if (evalLeft.type === 'Literal' && evalRight.type === 'Literal') {
      var leftValue = evalLeft.value;
      var rightValue = evalRight.value;

      return {
        type: 'Literal',
        name: 'Literal',
        value: leftValue + rightValue
      };
    }
    return operator;
  }
};

var Variable = {
  type: 'Variable',
  name: 'Variable',
  evaluate: function evaluate(evaluator, operator, payload) {
    return operator;
  }
};

exports.default = {

  BinaryOperator: {
    Sum: Sum
  },

  Literal: {
    Literal: Literal
  },

  Variable: {
    Variable: Variable
  }

};