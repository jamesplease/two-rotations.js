import twoRotations from '../../src/two-rotations';

var transform;
describe('generateMatrix:', () => {
  beforeEach(() => {
    transform = twoRotations.generateMatrix(20, 30);
  });

  it('should return a nested matrix', () => {
    expect(transform).to.have.length(3);
    expect(transform[0]).to.have.length(3);
    expect(transform[1]).to.have.length(3);
    expect(transform[2]).to.have.length(3);
  });
});
