const getLocation = (onSuccess, onError) => {
    navigator.geolocation.getCurrentPosition(
        onSuccess,
        //position) => onSuccess(position),
        onError
        //  (error) => onError(error)
    );
};

const onSuccess = (position) => {
    const { longitude, latitude } = position.coords;
    console.log('Your position is:', longitude, latitude);
};
const onError = (error) => {
    console.log(error);
};

getLocation(onSuccess, onError);
