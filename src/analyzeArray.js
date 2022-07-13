function analyzeArray(array) {
  const length = array.length;
  let sum = 0;
  let min = array[0];
  let max = array[0];

  array.forEach((element) => {
    sum += element;
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });

  const average = sum / length;

  const object = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return object;
}

module.exports = analyzeArray;
