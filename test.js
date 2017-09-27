const assert = require('assert')

class NegativeError extends Error {
  constructor(message) {
    super(message)
    this.name = "NegativeError"
  }
}

function add(x, y) {
  if (x < 0 || y < 0) {
    throw new NegativeError("음수 노노해")
  }
  return x + y
}

assert.equal(add(1,2), 3)

assert.throws(() => {
  add(-1, 2)
}, NegativeError)

assert.throws(() => {
  add(1, -2)
}, NegativeError)

assert.throws(() => {
  add(-1, -2)
}, NegativeError)
