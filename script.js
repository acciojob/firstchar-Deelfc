function firstChar(str) {
    // Iterate over the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is not a space
        if (str[i] !== ' ') {
            return str[i];
        }
    }
    // If no non-space character is found, return an empty string
    return '';
}

// Test cases
console.log(firstChar(' Rosa Parks ')); // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' ')); // Output: ''
console.log(firstChar('')); // Output: ''
