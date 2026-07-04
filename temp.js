const temperatures = [30, 35, 28, 40, 25, 32];

function analyzeTemp(arr) {
  let max = arr[0];
  let min = arr[0];
  let total = 0;

  for (let temp of arr) {
    if (temp > max) max = temp;
    if (temp < min) min = temp;
    total += temp;
  }

  console.log("Highest:", max);
  console.log("Lowest:", min);
  console.log("Average:", total / arr.length);
}

analyzeTemp(temperatures);