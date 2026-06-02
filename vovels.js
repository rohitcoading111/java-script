let vowels = function(str){
    let count = 0;
    let vowelList = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < str.length; i++){

        let char = str[i];

        if(vowelList.includes(char)){
            count++;
        }
    }

    return count;
}

console.log(vowels("rohit"));