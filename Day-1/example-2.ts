function Gcd(x:number, y:number) {
    while(y) {
      var sample:number = y;
      y = x % y;
      x = sample;
    }
    return x;
  }
  
  console.log(Gcd(4, 8));
 