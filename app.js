const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// console.log(argv);

//lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(40.7500, -74.0000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(dir) => {
    let dataInfo = '';
    try {
        coords = await lugar.getLugarLatLng(dir);
        temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}°C`;



    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);