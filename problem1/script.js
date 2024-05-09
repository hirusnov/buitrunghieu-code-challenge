var sum_to_n_a = function (n) {
  return n * (n + 1) / 2
};
console.log('sum_to_n_a:', sum_to_n_a(5))

var sum_to_n_b = function (n) {
  return n === 1 ? 1 : n + sum_to_n_b(n - 1)
};
console.log('sum_to_n_b:', sum_to_n_b(5))


var sum_to_n_c = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum;
};
console.log('sum_to_n_c:', sum_to_n_c(5))