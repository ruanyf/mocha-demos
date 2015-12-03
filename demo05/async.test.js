var request = require('superagent');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
        expect(res).to.be.an('object');
        done();
      });
  });
});
