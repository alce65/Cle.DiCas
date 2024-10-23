const makeAsync = async (time) => {
    await new Promise((resolve) => setTimeout(resolve, time));
    const n = Math.random();
    if (n < 0.5) {
        throw new Error(`Error ${n}`);
    }

    return { value: n };
};

(async () => {
    try {
        const result = await makeAsync(200);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }

    // makeAsync(200)
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error.message);
    //     });
})();

try {
    const result = await makeAsync(200);
    console.log(result);
} catch (error) {
    console.log(error.message);
}
