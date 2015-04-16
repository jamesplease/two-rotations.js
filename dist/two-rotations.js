(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.twoRotations = factory();
})(this, function () {
  "use strict";

  // Generate a rotation matrix from a given yaw and pitch
  // This matrix is a combination of two rotations:
  // Ry * Rx
  // Where Ri is the 3d rotation matrix about that axis
  // We call the angle about the y-axis the 'yaw,'
  // and the angle about the x-axis is the 'pitch.'
  function matrixGenerator(yaw, pitch) {
    var cosP = Math.cos(pitch);
    var sinP = Math.sin(pitch);
    var cosY = Math.cos(yaw);
    var sinY = Math.sin(yaw);

    return [[cosY, 0, sinY], [sinY * sinP, cosP, -sinP * cosY], [-sinY * cosP, sinP, cosP * cosY]];
  }

  var generateMatrix = matrixGenerator;

  function rotate(v, t) {
    return [v[0] * t[0][0] + v[1] * t[0][1] + v[2] * t[0][2], v[0] * t[1][0] + v[1] * t[1][1] + v[2] * t[1][2], v[0] * t[2][0] + v[1] * t[2][1] + v[2] * t[2][2]];
  }

  var twoRotations = { rotate: rotate, generateMatrix: generateMatrix };

  var two_rotations = twoRotations;

  return two_rotations;
});
//# sourceMappingURL=./two-rotations.js.map