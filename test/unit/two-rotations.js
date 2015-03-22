import twoRotations from '../../src/two-rotations';

describe('Two Rotations:', () => {
  it('should have rotate and generateMatrix methods', () => {
    expect(twoRotations.rotate).to.be.ok;
    expect(twoRotations.generateMatrix).to.be.ok;
  });
});
