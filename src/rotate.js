function rotate(v, t) {
  return [
    v[0] * t[0][0] + v[1] * t[0][1] + v[2] * t[0][2],
    v[0] * t[1][0] + v[1] * t[1][1] + v[2] * t[1][2],
    v[0] * t[2][0] + v[1] * t[2][1] + v[2] * t[2][2]
  ];
}

export default rotate;
