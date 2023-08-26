// Create the `series` variable
var series = [0, 1];
//console.log(typeof series);

// Generate the Fibonacci sequence
while (series.length < 10) { // Change the condition to generate the first ten numbers
//console.log(typeof series);
  var nextNumber = series[series.length - 1] + series[series.length - 2];
  series.push(nextNumber);
}

// Print the Fibonacci sequence to the console
console.log(series.join(' '));