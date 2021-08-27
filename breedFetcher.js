const request = require('request');


const fetchBreedDescription = function(url, callback) {
url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';
  request(url, (error, response, body) => {

    if (error) {
      callback(null, error);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  
    const description = JSON.parse(body);
    const breedInfo = description[0].description;
    callback(null, breedInfo);

  });
};

module.exports = { fetchBreedDescription };