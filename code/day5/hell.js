const makeAsync = (time, x, callback) => {
    return setTimeout(() => {
        const n = Math.trunc(Math.random() * 99) + 1;
        callback(x, n);
    }, time);
};

const initial = 2;
makeAsync(1000, initial, (seed, random) => {
    const result = seed * random;
    console.log(result);
    makeAsync(2000, result, (seed, random) => {
        const result = seed * random;
        console.log(result);
        makeAsync(3000, result, (seed, random) => {
            const result = seed * random;
            console.log(result);
            makeAsync(4000, result, (seed, random) => {
                const result = seed * random;
                console.log(result);
                makeAsync(5000, result, (seed, random) => {
                    const result = seed * random;
                    console.log(result);
                });
            });
        });
    });
});
