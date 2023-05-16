'use strict';

let enlace = API_URL + generarNumeroAleatorio(1, 1001);

function generarNumeroAleatorio(primero, ultimo) {
    return Math.floor(Math.random() * (ultimo - primero)) + primero;
}

HTTP.ajax('GET', enlace).then((datosPokemon) => {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(datosPokemon.name));
    p.className="nombre"
    document.querySelector("main").insertBefore(p, document.querySelector("main").firstChild);
    
    let img = document.createElement("img");
    img.src = datosPokemon.sprites.front_default;
    document.querySelector("#imagen").appendChild(img);
    console.log(datosPokemon.stats[1].base_stat)
}).catch((error) => {
    console.log(error);
});

function generarPokemon() {

}