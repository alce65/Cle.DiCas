const assignProp = (x) => {
    try {
        x.prop = 1;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
};

assignProp(22); // Cannot create property 'prop' on number '22'
assignProp('Pepe'); // Cannot create property 'prop' on string 'Pepe'
assignProp(true); // Cannot create property 'prop' on boolean 'true'
assignProp(22n); // Cannot create property 'prop' on bigint '22'
assignProp(Symbol('s')); // Cannot create property 'prop' on symbol 'Symbol(s)'
assignProp(undefined); // Cannot set properties of undefined (setting 'prop')
assignProp(null); // Cannot set properties of null (setting 'prop')
