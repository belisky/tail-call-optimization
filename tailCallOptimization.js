const factorial = (n, accum = 1) => {
    if (n < 2) {
        return accum;
    }

    return factorial(n - 1, n * accum);
};

console.log(factorial(5))