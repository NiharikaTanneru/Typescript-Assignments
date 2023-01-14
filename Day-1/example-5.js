var num = 10;
var n1 = 0;
var n2 = 1;
var next;
console.log('Fibonacci Series:');
for (var i = 1; i <= num; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
