const apple = {
  value: 2
},
  orange = {
    value: 3
  },
  nums = [1, 2, 3],
  list = [{
    price: 30
  }, {
    price: 12
  }, {
    price: 10
  }],
  balance = 100

function mapWithThis(array, thisArg) {
  return array.map(function (value) {
    return value * this.value
  }, thisArg)
}

console.log('mapWithThis:', mapWithThis(nums, apple)) // mapWithThis: [ 2, 4, 6 ]

function mapWithoutThis(array) {
  return array.map(value => value * 2)
}

console.log('mapWithoutThis:', mapWithoutThis(nums, apple)) // mapWithoutThis: [ 2, 4, 6 ]

function filterPairs(array) {
  return array.filter(value => value % 2 === 0)
}

console.log('filterPairs:', filterPairs(nums)) // filterPairs: [ 2 ]

function somaArray(array) {
  return array.reduce((previusValue, currentValue) => {
    return previusValue + currentValue
  })
}

console.log('somaArray:', somaArray(nums)) // 6

function balanceCalc(list, balance) {
  return list.reduce((previusValue, currentValue) => {
    return previusValue - currentValue.price
  }, balance)
}

console.log('balanceCalc:', balanceCalc(list, balance)) // balanceCalc: 48