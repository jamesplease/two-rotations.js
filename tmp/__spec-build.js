(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var config = require("../../package.json").babelBoilerplateOptions;

global.mocha.setup("bdd");
global.onload = function () {
  global.mocha.checkLeaks();
  global.mocha.globals(config.mochaGlobals);
  global.mocha.run();
  require("./setup")();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../package.json":4,"./setup":8}],2:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var twoRotations = _interopRequire(require("../../src/two-rotations"));

var withinRange = _interopRequire(require("../helpers/within-range"));

var π = Math.PI;

var vector, rotated, expected;
describe("Two Rotations:", function () {

  describe("No rotation", function () {
    it("Undefined yaw and pitch should leave the vector unchanged", function () {
      vector = [1, 5, 3];
      rotated = twoRotations(vector);
      expected = [1, 5, 3];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("Yaw and pitch of 0 should leave the vector unchanged", function () {
      vector = [1, 5, 3];
      rotated = twoRotations(vector, 0, 0);
      expected = [1, 5, 3];
      expect(withinRange(rotated, expected)).to.be["true"];
    });
  });

  describe("Yaw", function () {
    it("rotations about the y-axis should not affect the y component", function () {
      vector = [0, 1, 0];
      rotated = twoRotations(vector, π / 2);
      expected = [0, 1, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate the unit x vector about the y axis correctly", function () {
      vector = [1, 0, 0];
      rotated = twoRotations(vector, π / 2);
      expected = [0, 0, -1];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate the unit z vector about the y axis correctly", function () {
      vector = [0, 0, 1];
      rotated = twoRotations(vector, -π / 2);
      expected = [-1, 0, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate an arbitrary vector correctly", function () {
      vector = [0.707106781, 5, 0.707106781];
      rotated = twoRotations(vector, π / 4);
      expected = [1, 5, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });
  });

  describe("Pitch", function () {
    it("pitch rotations should not affect the x component", function () {
      vector = [1, 0, 0];
      rotated = twoRotations(vector, 0, π / 2);
      expected = [1, 0, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate the unit y vector about the y axis correctly", function () {
      vector = [0, 1, 0];
      rotated = twoRotations(vector, 0, π / 2);
      expected = [0, 0, 1];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate the unit z vector about the y axis correctly", function () {
      vector = [0, 0, 1];
      rotated = twoRotations(vector, 0, -π / 2);
      expected = [0, 1, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate an arbitrary vector correctly", function () {
      vector = [5, 0.707106781, 0.707106781];
      rotated = twoRotations(vector, 0, π / 4);
      expected = [5, 0, 1];
      expect(withinRange(rotated, expected)).to.be["true"];
    });
  });

  describe("Yaw and pitch", function () {
    it("should rotate the y vector correctly", function () {
      vector = [0, 1, 0];
      rotated = twoRotations(vector, π, π);
      expected = [0, -1, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate the x vector correctly", function () {
      vector = [1, 0, 0];
      rotated = twoRotations(vector, π, π);
      expected = [-1, 0, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate the z vector correctly", function () {
      vector = [0, 0, 1];
      rotated = twoRotations(vector, π / 2, π / 2);
      expected = [1, 0, 0];
      expect(withinRange(rotated, expected)).to.be["true"];
    });

    it("should rotate an arbitrary vector correctly", function () {
      vector = [0.707106781, 0.707106781, 0.707106781];
      rotated = twoRotations(vector, π / 4, π / 4);
      expected = [1, 0.5, 0.5];
      expect(withinRange(rotated, expected)).to.be["true"];
    });
  });
});

},{"../../src/two-rotations":6,"../helpers/within-range":7}],3:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// Tests for our withinRange helper

var withinRange = _interopRequire(require("../helpers/within-range"));

var v1, v2;
describe("withinRange", function () {
  describe("when the two vectors are equal", function () {
    beforeEach(function () {
      v1 = [1.5433, 1.7884, 10.9];
      v2 = [1.5433, 1.7884, 10.9];
    });

    it("should return true", function () {
      expect(withinRange(v1, v2)).to.be["true"];
    });
  });

  describe("when the two vectors are nearly, but not quite, equal", function () {
    beforeEach(function () {
      v1 = [1.5432, 1.7884, 10.9];
      v2 = [1.5433, 1.7884, 10.9];
    });

    it("should return false", function () {
      expect(withinRange(v1, v2)).to.be["false"];
    });
  });

  describe("when the two vectors are not equal", function () {
    beforeEach(function () {
      v1 = [8, 2, 6];
      v2 = [1.5433, 1.7884, 10.9];
    });

    it("should return false", function () {
      expect(withinRange(v1, v2)).to.be["false"];
    });
  });

  describe("when the two vectors are effectively equal", function () {
    beforeEach(function () {
      v1 = [1.5, 1.7885, 10.9];
      v2 = [1.49999999, 1.7885, 10.9];
    });

    it("should return true", function () {
      expect(withinRange(v1, v2)).to.be["true"];
    });
  });
});

},{"../helpers/within-range":7}],4:[function(require,module,exports){
module.exports={
  "name": "two-rotations",
  "version": "0.0.1",
  "description": "A rotation matrix for rotations about two axes.",
  "main": "dist/two-rotations.js",
  "scripts": {
    "test": "gulp"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jmeas/two-rotations.js.git"
  },
  "keywords": [
    "rotation",
    "rotate",
    "matrix",
    "matrices",
    "point",
    "diagram",
    "ui"
  ],
  "author": "Jmeas",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/jmeas/two-rotations.js/issues"
  },
  "homepage": "https://github.com/jmeas/two-rotations.js",
  "devDependencies": {
    "babel": "^4.3.0",
    "babelify": "^5.0.3",
    "browserify": "^8.1.1",
    "chai": "^2.0.0",
    "del": "^1.1.1",
    "esperanto": "^0.6.7",
    "glob": "^4.3.5",
    "gulp": "^3.8.10",
    "gulp-babel": "^4.0.0",
    "gulp-file": "^0.2.0",
    "gulp-filter": "^2.0.0",
    "gulp-istanbul": "^0.6.0",
    "gulp-jscs": "^1.4.0",
    "gulp-jshint": "^1.9.0",
    "gulp-livereload": "^3.4.0",
    "gulp-load-plugins": "^0.8.0",
    "gulp-mocha": "^2.0.0",
    "gulp-notify": "^2.1.0",
    "gulp-plumber": "^0.6.6",
    "gulp-rename": "^1.2.0",
    "gulp-sourcemaps": "^1.3.0",
    "gulp-uglifyjs": "^0.6.0",
    "isparta": "^2.2.0",
    "jshint-stylish": "^1.0.0",
    "mkdirp": "^0.5.0",
    "mocha": "^2.1.0",
    "run-sequence": "^1.0.2",
    "sinon": "^1.12.2",
    "sinon-chai": "^2.7.0",
    "vinyl-source-stream": "^1.0.0"
  },
  "babelBoilerplateOptions": {
    "entryFileName": "two-rotations",
    "exportVarName": "TwoRotations",
    "mochaGlobals": [
      "stub",
      "spy",
      "expect"
    ]
  }
}

},{}],5:[function(require,module,exports){
// Generate a rotation matrix from a given yaw and pitch
// This matrix is a combination of two rotations:
// Rx * Rz
// Where Ri is the 3d rotation matrix about that axis
// We call the angle about the z-axis the 'yaw,'
// and the angle about the x-axis is the 'pitch.'
function matrixGenerator() {
  var yaw = arguments[0] === undefined ? 0 : arguments[0];
  var pitch = arguments[1] === undefined ? 0 : arguments[1];

  var cosP = Math.cos(pitch);
  var sinP = Math.sin(pitch);
  var cosY = Math.cos(yaw);
  var sinY = Math.sin(yaw);

  return [[cosY, 0, sinY], [sinY * sinP, cosP, -sinP * cosY], [-sinY * cosP, sinP, cosP * cosY]];
}

module.exports = matrixGenerator;

},{}],6:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var matrixGenerator = _interopRequire(require("./matrix-generator"));

function TwoRotations(v, yaw, pitch) {

  // Generate our rotation matrix given the yaw and pitch.
  // yaw and pitch are given in radians
  var t = matrixGenerator(yaw, pitch);

  // Return the transformed vector
  return [v[0] * t[0][0] + v[1] * t[0][1] + v[2] * t[0][2], v[0] * t[1][0] + v[1] * t[1][1] + v[2] * t[1][2], v[0] * t[2][0] + v[1] * t[2][1] + v[2] * t[2][2]];
}

module.exports = TwoRotations;

},{"./matrix-generator":5}],7:[function(require,module,exports){
// How close two numbers must be two be considered equal. Floating point
// errors are generally on the order of 10^-15.
var errorMag = 1e-8;

// Test that two vectors are reasonably equal. This is necessary because
// of Javascript's good old floating point arithmetic.
function withinRange(v1, v2) {

  // We assume that the matrices are equal, and seek
  // to disprove this assertion.
  var valid = true;

  // `mapped` is the value of v2 that
  // corresponds to a given value of v1
  var mapped;

  // Loop through each component, `c`, of `v1`,
  // comparing the values against the corresponding
  // value in `v2`
  v1.forEach(function (c, index) {
    mapped = v2[index];

    // Remove fractional digits beyond our allowed magnitude of
    // error, and the
    if (Math.abs(c - mapped) > errorMag) {
      valid = false;
    }
  });
  return valid;
}

module.exports = withinRange;

},{}],8:[function(require,module,exports){
(function (global){
module.exports = function () {
  global.expect = global.chai.expect;

  beforeEach(function () {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy = this.sandbox.spy.bind(this.sandbox);
  });

  afterEach(function () {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
  });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1,2,3]);
