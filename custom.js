function customFilter(arr, callback) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) { // Agar condition sach hoti hai
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

let ages = [25, 17, 18, 30, 42, 16];

let adults = customFilter(ages, age => age >= 18);

console.log(adults);
