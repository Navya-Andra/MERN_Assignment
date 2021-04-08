//program to reverse a number
let number=9735;
var reverse=0,temp;
while(number>0){
    temp=number%10;
    number=parseInt(number/10);
    reverse=reverse*10+temp;
}
console.log(reverse);