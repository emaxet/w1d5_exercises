function check(num) {
  var reversed = num.toString().split('').reverse();
  var oddSum = 0;
  var evenSum = 0;
  for (var i = 1; i <= reversed.length; i++) {
    if (i % 2 !== 0) {
      oddSum += Number(reversed[i - 1]);
    } else if (i % 2 === 0) {
      reversed[i - 1] = reversed[i - 1] * 2;
    }
  }
  for (var i = 1; i < reversed.length; i += 2) {
    if(reversed[i] > 9) {
      reversed[i] -= 9;
    }
    evenSum += reversed[i];
  }
  var finalSum = oddSum + evenSum;
  if(finalSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = check;