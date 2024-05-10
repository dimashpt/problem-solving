function timeConversion(s) {
  // Extract the time parts and the AM/PM part
  const [time, modifier] = s.split(/(AM|PM)/);
  let [hours, minutes, seconds] = time.split(':');

  // Convert hours to 24-hour format
  if (hours === '12') {
    hours = modifier === 'AM' ? '00' : '12';
  } else if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  // Return the formatted time
  return `${hours}:${minutes}:${seconds}`;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for input
readline.question('Enter a time in 12-hour format (HH:mm:ssAM/PM): ', (input) => {
  // Regex pattern for 12-hour format with optional seconds
  const regex = /^([01]?\d|2[0-3]):([0-5]\d)(?:[:][0-5]\d)?(AM|PM)$/;

  // Check if the input matches the regex pattern
  if (!regex.test(input)) {
    console.error('Please enter a valid time in 12-hour format (HH:mm:ssAM/PM).');
    readline.close();
    return;
  }

  // Call the timeConversion function with the validated input
  const convertedTime = timeConversion(input);
  console.log('Converted time in 24-hour format:', convertedTime);

  readline.close();
});
