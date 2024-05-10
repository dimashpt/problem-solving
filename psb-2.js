const { inputAndValidate } = require("./helpers");

function plusMinus(arr) {
  // Initialize counters for positive, negative, and zero values
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Iterate through the array
  arr.forEach(element => {
    if (element > 0) {
      positiveCount++;
    } else if (element < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  // Calculate ratios with six decimal places
  const totalElements = arr.length;
  const positiveRatio = (positiveCount / totalElements).toFixed(6);
  const negativeRatio = (negativeCount / totalElements).toFixed(6);
  const zeroRatio = (zeroCount / totalElements).toFixed(6);

  // Print the ratios
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

inputAndValidate(plusMinus)
