//program to count the number of digits in a number
function digits_count(n) {
    var count = 0;
    if (n >= 1){
        ++count;
    }
    while (n / 10 >= 1) {
    n /= 10;
    ++count;
    }
    return count;
}
console.log(digits_count(12112));
