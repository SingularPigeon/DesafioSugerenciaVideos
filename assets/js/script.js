// Función patrón módulo
const ModuloVideos = (() => {
  // Función privada
  function showVideo(url, id) {
    let iframe = document.getElementById(id);
    if (iframe) {
      iframe.setAttribute('src', url);
    } else {
      console.log(`No se encontró un iframe con el id "${id}"`);
    }
  }
  // Función pública
  return function(url, id) {
    showVideo(url, id);
  };
})();

// Clases 
class Multimedia {
  #url;
  constructor(url) {
    this.#url = url;
  }
  get url() {
    return this.#url;
  }

  setInicio() {
    return `Este método es para realizar un cambio en la URL del video`;
  }
}

class Reproductor extends Multimedia {
  #id;
  constructor(url, id) {
    super(url);
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
  // Método
  playMultimedia() {
    ModuloVideos(this.url, this.#id);
  }
// Método
  setInicio(seg) {
    let nuevoUrl = `${this.url}&start=${seg}`;
    ModuloVideos(nuevoUrl, this.#id);
  }
}

// Instancias de la clase Reproductor
const pelicula = new Reproductor(
  "https://www.youtube.com/embed/LnHJ5vbgBzs?si=eE56gUA2rpsu5EbP",
  "peliculas"
);
const musica = new Reproductor(
  "https://www.youtube.com/embed/jfKfPfyJRdk?si=p0f_7Fm9EKMyXX0V",
  "musica"
);
const serie = new Reproductor(
 "https://www.youtube.com/embed/FDpOQK0Gprc?si=yd4VHnMYsuNRQmzO",
  "series"
);
// Llamado a los métodos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

pelicula.setInicio(30);
