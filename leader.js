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


