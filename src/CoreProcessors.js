
const Literal = {
  type: 'Literal',
  name: 'Literal',
  evaluate(evaluator, operator, payload) { return operator; },
};

const Sum = {
  type: 'BinaryOperator',
  name: 'Sum',
  evaluate(evaluator, operator, payload) {
    const { left, right } = operator;
    const evalLeft = evaluator(left);
    const evalRight = evaluator(right);
    if (evalLeft.type === 'Literal' && evalRight.type === 'Literal') {
      const { value: leftValue } = evalLeft;
      const { value: rightValue } = evalRight;
      return {
        type: 'Literal',
        name: 'Literal',
        value: leftValue + rightValue,
      };
    }
    return operator;
  },
};

const Variable = {
  type: 'Variable',
  name: 'Variable',
  evaluate(evaluator, operator, payload) { return operator; },
};

export default {

  BinaryOperator: {
    Sum,
  },

  Literal: {
    Literal,
  },

  Variable: {
    Variable,
  },

};
