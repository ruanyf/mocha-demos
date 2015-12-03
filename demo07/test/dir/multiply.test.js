var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
  it('1 乘 1 应该等于 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });
})
