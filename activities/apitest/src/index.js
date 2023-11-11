console.log("Hello World!");


const body = document.querySelector('body');

const img = document.createElement('img');
img.src = '#';

body.append(img);
const result = fetch('https://api.giphy.com/v1/gifs/translate?api_key=KDsLm21pdY4eS41gCPj9mrrCjYSA5Nai&s=cats');
result.then((response) => {
  return response.json();
}).then(result => {
  console.log(result)
  img.src = result.data.images.original.url;
})