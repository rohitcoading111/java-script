function charFrequency(str) {
  let freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  return freq;
}

console.log(charFrequency("javascript"));
/*
{
  j:1,
  a:2,
  v:1,
  s:1,
  c:1,
  r:1,
  i:1,
  p:1,
  t:1
}
*/