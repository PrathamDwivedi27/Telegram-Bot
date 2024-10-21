const mod = 1000000007; // Define your mod value here if needed

function power(base, expo) {
    let result = 1;
    base = base % mod;
    while (expo) {
        if (expo % 2 === 1) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        expo = Math.floor(expo / 2);
    }
    return result;
}

function isPerfectSquare(x) {
    if (x >= 0) {
        let sr = Math.floor(Math.sqrt(x));
        return sr * sr === x;
    }
    return false;
}
function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}


export{
    power,
    isPerfectSquare,
    isPrime
}