//Part 01
let xValue = 10;
while (xValue > 0){
    xValue -= 0.5;
    console.log(`xValue = ${xValue}`);
}

//Part 02
let i = 1;
while (i <= 100){
    if (i % 2 !== 0){
        console.log(`Odd Number: ${i}`);
    }
    i++;
}

//Part 03
function printOneToN(n){
    let i = 1;
    while(i<=n){
        console.log(`[${i}]`);
        i++;
    }
}
printOneToN(6);

//Part 04
function sumOneToN(n){
    let sum = 0;
    let i = 1;
    while(i<=n){
        sum += i;
        i++;
    }
    return sum;
}
console.log(`Sum 1 to 19 = ${sumOneToN(19)}`);