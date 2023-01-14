var num1:number = 2;
var num2:number = 5;
var num3:number = 15;
var largest:number;
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);