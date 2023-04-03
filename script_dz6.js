let numbers = [];

for (let i = 1; i <= 7; i++) {
    let input = Number(prompt("enter num"));
    numbers.push(input);
}

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers.length);