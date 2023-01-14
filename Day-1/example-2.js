function Gcd(x, y) {
    while (y) {
        var sample = y;
        y = x % y;
        x = sample;
    }
    return x;
}
console.log(Gcd(4, 8));
