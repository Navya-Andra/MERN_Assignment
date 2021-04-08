//program to calculate gcd of numbers
let number1 = 60;
let number2 = 72;
// looping until both numbers are equal
while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}
console.log(`GCD is ${number1}`)