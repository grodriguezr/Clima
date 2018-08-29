// const axios = require('axios');
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) =>{
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es ${temp}°C`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
};

getInfo(argv.direccion).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// clima.getClima(10.3910485, -75.4794257).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// lugar.getLugarLatLng(argv.direccion).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


//console.log(argv.direccion);




//10.3910485
//-75.4794257