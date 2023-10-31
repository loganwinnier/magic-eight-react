/** Takes an array and returns a random element */
function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export { choice };