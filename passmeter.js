function checkPassword(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[@#$%^&*!]/.test(password)) score++;

  const levels = [
    "😢 Very Weak",
    "😐 Weak",
    "🙂 Medium",
    "💪 Strong",
    "🔥 Very Strong"
  ];

  console.log(levels[score]);
}

checkPassword("Hello123@");