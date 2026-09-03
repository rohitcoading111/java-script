function isPalindrome(str) {
    // Sirf alphanumeric characters rakhna aur lowercase karna
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let len = cleanStr.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (cleanStr[i] !== cleanStr[len - 1 - i]) {
            return false; // Agar character match nahi hua
        }
    }
    return true;
}

console.log(isPalindrome("Nitin")); 
console.log(isPalindrome("JavaScript"));