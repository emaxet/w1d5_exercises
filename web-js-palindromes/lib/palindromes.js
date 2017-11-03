function isPalindrome(s) {
  var stringNoSpaces = s.split(" ").join("");
  var stringReverse = stringNoSpaces.split("").reverse().join("");
  return stringNoSpaces == stringReverse;
}

module.exports = isPalindrome;
