const compliments = [
  "🔥 You are improving!",
  "💯 Nice logic!",
  "🚀 Keep Coding!",
  "😎 Future Developer!",
  "⭐ Amazing Work!"
];

function showCompliment() {
  const random =
    compliments[Math.floor(Math.random() * compliments.length)];

  console.log(random);
}

showCompliment();