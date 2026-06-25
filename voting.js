const votes = {};

function vote(candidate) {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
}

vote("A");
vote("B");
vote("A");
vote("C");
vote("A");

console.log(votes);

// Output:
// { A: 3, B: 1, C: 1 }