module.exports = function reverse (n) {
  n = Math.abs(n);
  n = n.toString().split('');
  let length = n.length;
  let res = [];
  for (let i = length - 1; i >= 0; i--) {
    res.push(n[i]);
  }
  return +res.join('');
}
