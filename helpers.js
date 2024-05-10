function inputAndValidate(callback) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Prompt user for input
  readline.question('Enter space-separated integers (any number): ', (input) => {
    // Convert input string to an array of numbers
    const arr = input.split(' ').map(Number);
  
    // Check if the input matches the regex pattern
    if (arr.includes(Number.NaN)) {
      console.error('Please enter space-separated integers only.');
      readline.close();
      return;
    }
  
    // Call the callback function with the validated array
    callback(arr);
  
    readline.close();
  });
}

module.exports = { inputAndValidate }
