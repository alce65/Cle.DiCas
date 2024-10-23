const getData = () => {
    const host = 'https://jsonplaceholder.typicode.com';
    const path = 'users';
    const url = `${host}/${path}`;

    fetch(url)
        .then((response) => {
            const { ok, status, statusText } = response;
            console.log(ok, status, statusText);

            if (!ok) {
                throw new Error(`Error ${status}: ${statusText}`);
            }

            return response.json();
        })
        .then((data) => {
            console.log(data[0]);
        })
        .catch((error) => {
            console.error(error.name, error.message);
        });
};

getData();

const postData = (data) => {
    const host = 'https://jsonplaceholder.typicode.com';
    const path = 'users';
    const url = `${host}/${path}`;

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((response) => {
            const { ok, status, statusText } = response;
            console.log(ok, status, statusText);

            if (!ok) {
                throw new Error(`Error ${status}: ${statusText}`);
            }

            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error.name, error.message);
        });
};

postData({
    name: `Pepe`,
});
