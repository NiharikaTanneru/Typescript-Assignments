let  firstnum:number = 1;
let lastnum:number = 10;
console.log(`The prime numbers between ${firstnum} and ${lastnum} are:`);
for (let i:number = firstnum; i <= lastnum; i++) {
    let ex = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            ex = 1;
            break;
        }
    }

    if (i > 1 && ex == 0) {
        console.log(i);
    }
}