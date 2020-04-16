// Perform String Shifts
const stringShift = function(s, shift) {
  let shiftCount = shift.reduce((a, e) => {
    if (e[0]) {
      a += e[1];
    } else {
      a -= e[1];
    }
    return a;
  }, 0);

  shiftCount = shiftCount % s.length;

  if (shiftCount < 0) {
    shiftCount += s.length;
  }
  return s.substr(s.length - shiftCount) + s.substr(0, s.length - shiftCount);
};
