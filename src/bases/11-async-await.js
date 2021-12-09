const getImagen = async () => {

  try { //cuando hagamos async await tenemos que colocarlo con try y catch

    const apiKey = "iIwqXRCFbcZXdSa0JR7ENB6ZnU12VuAL";
  
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json(); //respuesta de la api
  
    const { url } = data.images.original; //sacamos la url
  
    const img = document.createElement("img"); //creamos el elemento
    img.src = url;
  
    document.body.append(img);
    console.log(data);

  } catch (error) {

    //manejo del error
  }

};

getImagen();
