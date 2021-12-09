const apiKey = "iIwqXRCFbcZXdSa0JR7ENB6ZnU12VuAL";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion //promesas en cadena
  .then((resp) => resp.json())
  .then(({ data }) => {

      const {url} = data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.body.append(img);
  })
  .catch(console.warn);
