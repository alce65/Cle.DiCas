const makeAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.random();
            if (n > 0.5) {
                resolve(`Data received ${n}`);
            } else {
                reject(new Error(`Error occurred ${n}`));
            }
        }, 1000);
    });
};

console.log('Promise started');
makeAsync()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log('Promise completed');
    });
