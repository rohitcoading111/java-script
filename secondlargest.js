function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique.length >= 2 ? unique[1] : null;
}

console.log(secondLargest([10, 5, 8, 20, 15, 20]));