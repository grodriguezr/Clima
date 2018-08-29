const axios = require('axios');

const getClima = async (lat, lng) => {
    let temperatura = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ead55243bd1164da846ed6c514b991ed`);
    if(temperatura.data.cod === "400"){
        throw new Error('No es una coordenada válida');
    }
    return temperatura.data.main.temp;
};

module.exports = {
    getClima
}