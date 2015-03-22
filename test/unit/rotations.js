import twoRotations from '../../src/two-rotations';
import withinRange from '../helpers/within-range';

var π = Math.PI;

var vector, matrix, rotated, expected;
describe('Rotations:', () => {

  describe('No rotation', () => {
    it('Undefined yaw and pitch should leave the vector unchanged', () => {
      vector = [1, 5, 3];
      matrix = twoRotations.generateMatrix();
      rotated = twoRotations.rotate(vector, matrix);
      expected = [1, 5, 3];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('Yaw and pitch of 0 should leave the vector unchanged', () => {
      vector = [1, 5, 3];
      matrix = twoRotations.generateMatrix(0, 0);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [1, 5, 3];
      expect(withinRange(rotated, expected)).to.be.true;
    });
  });

  describe('Yaw', () => {
    it('rotations about the y-axis should not affect the y component', () => {
      vector = [0, 1, 0];
      matrix = twoRotations.generateMatrix(π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [0, 1, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate the unit x vector about the y axis correctly', () => {
      vector = [1, 0, 0];
      matrix = twoRotations.generateMatrix(π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [0, 0, -1];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate the unit z vector about the y axis correctly', () => {
      vector = [0, 0, 1];
      matrix = twoRotations.generateMatrix(-π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [-1, 0, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate an arbitrary vector correctly', () => {
      vector = [0.707106781, 5, 0.707106781];
      matrix = twoRotations.generateMatrix(π/4);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [1, 5, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });
  });

  describe('Pitch', () => {
    it('pitch rotations should not affect the x component', () => {
      vector = [1, 0, 0];
      matrix = twoRotations.generateMatrix(0, π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [1, 0, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate the unit y vector about the y axis correctly', () => {
      vector = [0, 1, 0];
      matrix = twoRotations.generateMatrix(0, π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [0, 0, 1];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate the unit z vector about the y axis correctly', () => {
      vector = [0, 0, 1];
      matrix = twoRotations.generateMatrix(0, -π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [0, 1, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate an arbitrary vector correctly', () => {
      vector = [5, 0.707106781, 0.707106781];
      matrix = twoRotations.generateMatrix(0, π/4);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [5, 0, 1];
      expect(withinRange(rotated, expected)).to.be.true;
    });
  });

  describe('Yaw and pitch', () => {
    it('should rotate the y vector correctly', () => {
      vector = [0, 1, 0];
      matrix = twoRotations.generateMatrix(π, π);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [0, -1, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate the x vector correctly', () => {
      vector = [1, 0, 0];
      matrix = twoRotations.generateMatrix(π, π);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [-1, 0, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate the z vector correctly', () => {
      vector = [0, 0, 1];
      matrix = twoRotations.generateMatrix(π/2, π/2);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [1, 0, 0];
      expect(withinRange(rotated, expected)).to.be.true;
    });

    it('should rotate an arbitrary vector correctly', () => {
      vector = [0.707106781, 0.707106781, 0.707106781];
      matrix = twoRotations.generateMatrix(π/4, π/4);
      rotated = twoRotations.rotate(vector, matrix);
      expected = [1, 0.5, 0.5];
      expect(withinRange(rotated, expected)).to.be.true;
    });
  });
});
