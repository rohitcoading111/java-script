function characterCount(str) {
    let countObj = {};
    
    for (let char of str.toLowerCase()) {
        if (char.match(/[a-z0-9]/)) { // Sirf letters aur numbers count karne ke liye
            countObj[char] = (countObj[char] || 0) + 1;
        }
    }
    return countObj;
}

console.log(characterCount("Hello World!")); 

