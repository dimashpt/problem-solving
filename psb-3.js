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

// Example usage:
console.log(timeConversion('12:01:00PM')); // '12:01:00'
console.log(timeConversion('12:01:00AM')); // '00:01:00'
