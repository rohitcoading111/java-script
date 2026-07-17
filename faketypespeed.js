function typingSpeed(sentence, seconds) {
  const words = sentence.trim().split(" ").length;
  const wpm = Math.round((words / seconds) * 60);

  console.log(`Speed: ${wpm} WPM`);
}

typingSpeed("JavaScript is very interesting to learn", 15);