// How close two numbers must be two be considered equal. Floating point
// errors are generally on the order of 10^-15.
var errorMag = 0.00000001;

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
  v1.forEach((c, index) => {
    mapped = v2[index];

    // Remove fractional digits beyond our allowed magnitude of
    // error, and the
    if (Math.abs(c - mapped) > errorMag) {
      valid = false;
    }
  });
  return valid;
}

export default withinRange;
