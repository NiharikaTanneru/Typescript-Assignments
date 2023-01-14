var firstnum = 1;
var lastnum = 10;
console.log("The prime numbers between ".concat(firstnum, " and ").concat(lastnum, " are:"));
for (var i = firstnum; i <= lastnum; i++) {
    var ex = 0;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            ex = 1;
            break;
        }
    }
    if (i > 1 && ex == 0) {
        console.log(i);
    }
}
