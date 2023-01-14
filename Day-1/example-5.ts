const num:number = 10;
let n1:number = 0; 
let  n2:number = 1; 
let next:number;
console.log('Fibonacci Series:');
for (let i:number = 1; i <= num; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}