var a = 1
var b = 2
cal(a, b)
console.log(cal(a, b))
function cal () {
  return a + b
}

var assert = require('assert')
describe('check cal function', function () {
  describe('cal()', function () {
    it('should return 3', function () {
      assert.equal(cal(a, b), 4)
    })
  })
})
