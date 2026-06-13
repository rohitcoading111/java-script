function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  const clean2 = str2.toLowerCase().replace(/\s/g, "").split("").sort().join("");

  return clean1 === clean2;
}

console.log(isAnagram("listen", "silent"));       
console.log(isAnagram("triangle", "integral"));   
console.log(isAnagram("hello", "world"));         
console.log(isAnagram("Dormitory", "Dirty Room"));