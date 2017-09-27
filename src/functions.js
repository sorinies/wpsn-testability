function addSync(x, y) {
  return x + y
}

function addAsync(x, y) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x + y)
    }, 100)
  })
}

function throwErrorIfNegative(x) {
  if (x < 0) {
    throw new Error('양수만 허용됩니다.')
  }
  return x
}

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

module.exports = {
  addSync,
  addAsync,
  throwErrorIfNegative,
  add,
  NegativeError
}
