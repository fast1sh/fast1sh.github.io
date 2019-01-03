const url = 'https://api.giphy.com/v1/gifs/search?api_key=JrNfem7Wjf50qD3V9IJ99oZavNGCJK7L&limit=30&q=';
const background_div = document.getElementById('background');

const getGifs = () => {
  let searchValue = document.querySelector('#search').value;
  let completeUrl = url + searchValue;
  fetch(completeUrl)
    .then(data => data.json())
    .then(res => makeBackground(res))
    .catch(err => console.log(err));
};

const makeBackground = (gifs) => {
  const gifsArray = gifs.data;
  for (i in gifsArray) {
    let newGifUrl = gifsArray[i].images.fixed_height.url;
    let newWidth = gifsArray[i].images.fixed_height.width;
    let newHeight = gifsArray[i].images.fixed_height.height;
    let newGif = new Image(newWidth, newHeight);
    newGif.src = newGifUrl;
    background_div.appendChild(newGif);
  }
  background_div.style.overflowY = 'hidden';
}