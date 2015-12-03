var fetch = require('node-fetch');
var expect = require('chai').expect;

describe('promise.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});
