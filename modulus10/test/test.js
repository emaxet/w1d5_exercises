var assert = require("chai").assert;
var checkNumber = require("../lib/check");

describe("Check Number", function() {
  it("Should return true if a number is valid", function(){
    var finalNum = 49927398716;
    var result = checkNumber(finalNum);
    assert.isTrue(result);
  });
  it("Should return false if a number is not valid", function(){
    var finalNum = 49927398717;
    var result = checkNumber(finalNum);
    assert.isFalse(result);
  });
});