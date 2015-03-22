// Tests for our withinRange helper
import withinRange from '../helpers/within-range';

var v1, v2;
describe('withinRange', () => {
  describe('when the two vectors are equal', () => {
    beforeEach(() => {
      v1 = [1.5433, 1.7884, 10.9];
      v2 = [1.5433, 1.7884, 10.9];
    });

    it('should return true', () => {
      expect(withinRange(v1, v2)).to.be.true;
    });
  });

  describe('when the two vectors are nearly, but not quite, equal', () => {
    beforeEach(() => {
      v1 = [1.5432, 1.7884, 10.9];
      v2 = [1.5433, 1.7884, 10.9];
    });

    it('should return false', () => {
      expect(withinRange(v1, v2)).to.be.false;
    });
  });

  describe('when the two vectors are not equal', () => {
    beforeEach(() => {
      v1 = [8, 2, 6];
      v2 = [1.5433, 1.7884, 10.9];
    });

    it('should return false', () => {
      expect(withinRange(v1, v2)).to.be.false;
    });
  });

  describe('when the two vectors are effectively equal', () => {
    beforeEach(() => {
      v1 = [1.5, 1.7885, 10.9];
      v2 = [1.49999999, 1.7885, 10.9];
    });

    it('should return true', () => {
      expect(withinRange(v1, v2)).to.be.true;
    });
  });
});
