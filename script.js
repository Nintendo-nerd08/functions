function square (num){
    return num * num;
}

const greet = (name) => `Hello, ${name}!`

console.log(greet("Kevin"));

function outer() {
    let count = 5;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2



