function groupByLength(arr) {
  let result = {};

  for (let word of arr) {
    let len = word.length;

    if (!result[len]) {
      result[len] = [];
    }

    result[len].push(word);
  }

  return result;
}

console.log(groupByLength(["cat", "dog", "apple", "hi", "bat"]));

