function luckyNumber(name) {
  let total = 0;

  for (let ch of name.toLowerCase()) {
    if (ch >= "a" && ch <= "z") {
      total += ch.charCodeAt(0) - 96;
    }
  }

  console.log("Lucky Number:", total % 9 || 9);
}

luckyNumber("Rohit");