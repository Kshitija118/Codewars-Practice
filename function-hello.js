import rl from 'readline-sync';
console.log("Hello");
const num1 = rl.question("whats the first number?");
const num2 = rl.question ("whats the 2nd number?");
//let a = 3;
//let b = 4;
function multiply (num1, num2)
{
    
    let result = num1 * num2 ;
    console.log(`result is ${result}`);
}
multiply (num1,num2);
