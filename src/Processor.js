
import CoreProcessors from './CoreProcessors';
import Parser from 'math-equation-parser';

import assert from 'assert';

export default class Processor {

  static evaluate(text) {
    return (new Processor()).evaluate(text);
  }

  constructor(config) { }

  evaluate(text) {
    const operator = Parser.parse(text);
    return evaluator(operator);
  }

}

function evaluator(operator) {
  const payloadByTypes = CoreProcessors[operator.type];
  assert.ok(payloadByTypes, `Missing payload types ${operator.type}`);
  const payload = payloadByTypes[operator.name];
  assert.ok(payload, `No operator found for ${operator.type}`);
  assert.ok(
    typeof payload.evaluate === 'function',
    'Payload should have evaluate method',
  );
  return payload.evaluate(evaluator, operator, payload);
}
