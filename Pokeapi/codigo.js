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
    img.className = "imagen"
    document.querySelector("#primer").insertBefore(img, document.querySelector("#primer").firstChild);

    let vida = document.createElement("div");
    vida.appendChild(document.createTextNode("Vida: "+datosPokemon.stats[0].base_stat))
    document.querySelector("#primer").appendChild(vida)
    let atck = document.createElement("div");
    atck.appendChild(document.createTextNode("Ataque: "+datosPokemon.stats[1].base_stat))
    document.querySelector("#primer").appendChild(atck)
    let def = document.createElement("div");
    def.appendChild(document.createTextNode("Defensa: "+datosPokemon.stats[2].base_stat))
    document.querySelector("#primer").appendChild(def)
}).catch((error) => {
    console.log(error)
});

function generarPokemon() {

}