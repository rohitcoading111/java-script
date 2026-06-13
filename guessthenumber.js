const secret = Math.floor(Math.random() * 10) + 1;

function guess(num) {
  if (num === secret) {
    console.log("🎉 Correct!");
  } else if (num > secret) {
    console.log("Too High!");
  } else {
    console.log("Too Low!");
  }
}

guess(5);