const axios = require('axios');

const getClima = async(lat, lng) => {

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=&lat=${lat}&lon=${lng}&units=metric`,
        headers: { 'x-rapidapi-key': 'd28a7c6af9mshcf83cb173074a44p194deejsn07ed8938021d' }
    });

    const resp = await instance.get();
    if (resp.lenght === 0) {
        throw new Error(`No hay resultados`);

    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}