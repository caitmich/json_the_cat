const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv;

// const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[2];


fetchBreedDescription(url, (error, description) => {
  if (error) {
    console.log('error details:', error);
  } else {
    console.log(description);
  }
});
