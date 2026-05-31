function reverseString(str) {
    if (str === "") {
        return "";
    }

    let remainingString = str.slice(1); // "abc" -> "bc"

    let reversedRemaining = reverseString(remainingString);

    let firstChar = str[0];

    return reversedRemaining + firstChar;
}
console.log(reverseString("acb"));
