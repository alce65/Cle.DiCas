const makeAsync = (time, callback) => {
    return setTimeout(() => {
        const n = Math.random();
        callback(n);
    }, time);
};

const time = 1000;
makeAsync(time, (n) => {
    console.log(n);
});
