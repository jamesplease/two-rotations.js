// Generate a rotation matrix from a given yaw and pitch
// This matrix is a combination of two rotations:
// Rx * Rz
// Where Ri is the 3d rotation matrix about that axis
// We call the angle about the z-axis the 'yaw,'
// and the angle about the x-axis is the 'pitch.'
function matrixGenerator(yaw = 0, pitch = 0) {
  var cosP = Math.cos(pitch);
  var sinP = Math.sin(pitch);
  var cosY = Math.cos(yaw);
  var sinY = Math.sin(yaw);

  return [
    [ cosY,         0,    sinY         ],
    [ sinY * sinP,  cosP, -sinP * cosY ],
    [ -sinY * cosP, sinP, cosP * cosY  ]
  ];
}

export default matrixGenerator;
