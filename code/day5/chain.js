getLocationName((locationName) => {
    getLocation(locationName, (location) => {
        getWeather(location, (weather) => {
            getForecast(weather, (forecast) => {
                console.log(forecast);
            });
        });
    });
});

getLocationName()
    .then((locationName) => getLocation(locationName))
    .then((location) => getWeather(location))
    .then((weather) => getForecast(weather))
    .then((forecast) => console.log(forecast))
    .catch((error) => console.error(error.message))
    .finally(() => console.log('Proceso finalizado'));

getLocationName()
    .then(getLocation)
    .then(getWeather)
    .then(getForecast)
    .then(console.log)
    .catch((error) => console.error(error.message))
    .finally(() => console.log('Proceso finalizado'));

const users = [1, 5, 7, 8];

// const promises = [
//     getById(1),
//     getById(5),
//     getById(7),
//     getById(8),
//   ];

const promisesOK = users.map((id) => getById(id));

Promise.allSettled(promises).then(results).catch().finally();

// - `Promise.all` recibe un array de promesas y d
// devuelve una nueva promesa que
// se resuelve cuando todas las promesas del array se han resuelto,
//  o se rechaza si alguna de las promesas se rechaza.

// - `Promise.allSettled` recibe un array de promesas
//  y devuelve una nueva promesa
// que se resuelve cuando todas las promesas del array se han resuelto o rechazado,
// independientemente de si alguna de las promesas se ha rechazado.

// - `Promise.race` recibe un array de promesas y
// devuelve una nueva promesa
// que se resuelve o se rechaza
// en función de la primera promesa del array que se resuelve o se rechaza.

// - `Promise.any` recibe un array de promesas
//  y devuelve una nueva promesa
// que se resuelve cuando alguna de las promesas del array se ha resuelto,
// o se rechaza si todas las promesas se han rechazado.
