const wait = (fn, seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(fn());
            } catch (error) {
                reject(error);
            }
        }, seconds * 1000);
    });
};

const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            resolve, // (position) => resolve(position),
            reject // (error) => reject(error)
        );
    });
};

const onSuccess = (position) => {
    const { longitude, latitude } = position.coords;
    console.log('Your position is:', longitude, latitude);
};
const onError = (error) => {
    console.log(error);
};

getLocation().then(onSuccess).catch(onError);
