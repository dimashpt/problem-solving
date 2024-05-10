function miniMaxSum(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the minimum sum by excluding the largest element
  const minSum = arr.slice(0, -1).reduce((a, b) => a + b, 0);

  // Calculate the maximum sum by excluding the smallest element
  const maxSum = arr.slice(1).reduce((a, b) => a + b, 0);

  // Print the minimum and maximum sum
  console.log(`${minSum} ${maxSum}`);
}

// Sample input
const arr = [1, 2, 3, 4, 5];

// Call the miniMaxSum function
miniMaxSum(arr);
