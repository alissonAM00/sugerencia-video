class Multimedia{
    #url 
    constructor(url){
        this.#url = url;

    }

    //funcion de inicio
    get url(){
    return this.#url;
    }

    set url(newUrl){
        this.#url = newUrl;
    }


    setInicio(){
        alert ("este metodo es para realizarun cambio en la url del video");

    }
}

class Reproductor extends Multimedia{
    #id
    constructor (url, id){
        super(url);
        this.#id= id

    }

    get id(){
        return this.#id
    }

    playMultimedia(){
        cargarVideo.mostrarVideo(this.url, this.#id)

    }
    setInicio(tiempo){
        
        let url= this.url;
        if (url.includes("?")){
            url +=`&start=${tiempo}`
        }else{
            url += `?start=${tiempo}`
        }
        this.url = url;

    }

     //video compartir ,insertar desde el src hasta antes de title 
     
}
//IIfe insetar url  
let cargarVideo = (() => {
    let insertarVideo = (url,id) => {
        id.setAttribute("src",url);
    }
    return { 
        mostrarVideo:(url,id) => insertarVideo (url,id)
    }
})();

// instanciar
let iframeMusica = document.getElementById("musica")
let musica = new Reproductor ("https://www.youtube.com/embed/TdvBsX7Rv8U?si=rtu2Z638hYUR5gdg" ,iframeMusica);
musica.setInicio(20);
musica.playMultimedia();

let iframePelicula = document.getElementById("peliculas")
let pelicula = new Reproductor ("https://www.youtube.com/embed/UzFZR2dRsSY?si=Pzmdof8owQ0dJNij" ,iframePelicula);
pelicula.setInicio(15);
pelicula.playMultimedia();

let iframeSerie = document.getElementById("series")
let serie = new Reproductor ("https://www.youtube.com/embed/uPOONJlXRr4?si=lH02frqdh3jrAFZ5" ,iframeSerie);
serie.setInicio(10);
serie.playMultimedia();