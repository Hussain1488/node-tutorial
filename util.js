const RandomNumberGenerator = ()  => { 
    return Math.floor(Math.random() * 100);
}

const CelciuseToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

module.exports = {RandomNumberGenerator, CelciuseToFahrenheit}; 