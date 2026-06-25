const messages = [
  { user: "Rohit", msg: "Hi" },
  { user: "Aman", msg: "Hello" },
  { user: "Rohit", msg: "How are you?" },
  { user: "Raj", msg: "Hey" },
  { user: "Rohit", msg: "Good Morning" }
];

function messageCount(arr) {
  const result = {};

  for (let message of arr) {
    if (result[message.user]) {
      result[message.user]++;
    } else {
      result[message.user] = 1;
    }
  }

  return result;
}

console.log(messageCount(messages));