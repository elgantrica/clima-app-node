const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'd28a7c6af9mshcf83cb173074a44p194deejsn07ed8938021d' }
    });
    const resp = await instance.get();
    const data = resp.data;

    if (data.lenght === 0) {
        throw new Error(`No hay resultados para ${ dir }`);

    }
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;



    return {
        direccion,
        lat,
        lng

    }

};

module.exports = { getLugarLatLng };