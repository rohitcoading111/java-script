const players = [
  { name: "Rohit", score: 120 },
  { name: "Aman", score: 250 },
  { name: "Raj", score: 180 }
];

// Top Player
function getTopPlayer(players) {
  let topPlayer = players[0];

  for (let player of players) {
    if (player.score > topPlayer.score) {
      topPlayer = player;
    }
  }

  return topPlayer;
}

// Average Score
function getAverageScore(players) {
  let total = 0;

  for (let player of players) {
    total += player.score;
  }

  return total / players.length;
}

// Sort Descending
function sortPlayers(players) {
  return [...players].sort((a, b) => b.score - a.score);
}

console.log("Top Player:", getTopPlayer(players));
console.log("Average Score:", getAverageScore(players));
console.log("Sorted:", sortPlayers(players));
