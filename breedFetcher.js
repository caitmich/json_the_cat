const request = require('request');
const args = process.argv;

let url = ('https://api.thecatapi.com/v1/breeds/search?q=' + args[2]);

request(url, (error, response, body) => {

  console.log('An error occurred:', error);
  console.log('your response status:', response.statusCode);
  let data = JSON.parse(body);
  console.log(data);
});

