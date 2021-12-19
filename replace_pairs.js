function replacePairs(array) {
  if (!array || typeof array !== 'object' || !array.length) return -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && typeof array[i] === 'number' && array[i] % 2 === 0)
      array[i] = 0;
  }
  return array;
}

const array = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(replacePairs(array));