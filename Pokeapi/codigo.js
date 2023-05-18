'use strict';
let contador = 1
let enlace = API_URL + contador;
document.querySelector("#post").addEventListener("click", contador++)

/*function generarNumeroAleatorio(primero, ultimo) {
    return Math.floor(Math.random() * (ultimo - primero)) + primero;
}*/

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
    document.querySelector("#stats").appendChild(vida)
    let atck = document.createElement("div");
    atck.appendChild(document.createTextNode("Ataque: "+datosPokemon.stats[1].base_stat))
    document.querySelector("#stats").appendChild(atck)
    let def = document.createElement("div");
    def.appendChild(document.createTextNode("Defensa: "+datosPokemon.stats[2].base_stat))
    document.querySelector("#stats").appendChild(def)
    let spatck = document.createElement("div");
    spatck.appendChild(document.createTextNode("Ataque especial: "+datosPokemon.stats[3].base_stat))
    document.querySelector("#stats").appendChild(spatck)
    let spdef = document.createElement("div");
    spdef.appendChild(document.createTextNode("Defensa Especial: "+datosPokemon.stats[4].base_stat))
    document.querySelector("#stats").appendChild(spdef)
    let speed = document.createElement("div");
    speed.appendChild(document.createTextNode("Velocidad: "+datosPokemon.stats[5].base_stat))
    document.querySelector("#stats").appendChild(speed)

    
    datosPokemon.abilities.forEach(element => {
        let habilidades = document.createElement("div")
        habilidades.appendChild(document.createTextNode(element.ability.name))
        document.querySelector("#datos").appendChild(habilidades)
    });

    let altura = document.createElement("div")
    altura.appendChild(document.createTextNode("Altura: "+datosPokemon.height+ "cm"))
    document.querySelector("#datos").appendChild(altura)

    let peso = document.createElement("div")
    peso.appendChild(document.createTextNode("Peso: "+datosPokemon.weight/10+ "Kg"))
    document.querySelector("#datos").appendChild(peso)


    datosPokemon.moves.forEach(element =>{
        let movimiento = document.createElement("div")
        movimiento.appendChild(document.createTextNode(element.move.name))
        document.querySelector("#moves").appendChild(movimiento)
    })
}).catch((error) => {
    console.log(error)
});

function generarPokemon() {

}