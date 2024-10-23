const makeAsyncImmediate = () => {
    return new Promise((resolve, reject) => {
        const n = Math.random();
        if (n > 0.5) {
            resolve(`Data received ${n}`);
        } else {
            reject(new Error(`Error occurred ${n}`));
        }
    });
};

makeAsyncImmediate()
    .then((data) => {
        console.log(data);
        return data;
    })
    .then((data) => {
        console.log('Segunda Promesa: ', data);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log('Promise completed');
    });

makeAsyncImmediate().then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.error(error.message);
    }
);
