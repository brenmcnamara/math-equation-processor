
import Processor from '../Processor';

function Literal(value) {
  return { type: 'Literal', name: 'Literal', value };
}

function Variable(variable) {
  return { type: 'Variable', name: 'Variable', variable };
}

describe('Processor', () => {

  it('evaluates the sum operator', () => {
    expect(Processor.evaluate('2 + 2')).toEqual(Literal(4));
    expect(Processor.evaluate('2 + 2 + 4 + 10')).toEqual(Literal(18));
    expect(Processor.evaluate('2 + x')).toEqual({
      type: 'BinaryOperator',
      name: 'Sum',
      left: Literal(2),
      right: Variable('x'),
    });
  });

});
