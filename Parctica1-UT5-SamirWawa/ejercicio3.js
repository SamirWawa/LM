'use strict'
function Ejercicio3(a, b) {
    let bo = 0
    console.log("Personas: " + a.join("/") + "\nArray donde bucar: " + b.join("/"))
    a.forEach(function (i) {
        b.forEach(function (j) {
            if (i == j)
                bo++
        })
    })
    if(bo==a.length)
        console.log("Todos incluidos")
    else if(bo == 0)
        console.log("Ninguno incluido")
    else
    console.log("Alguno incluido \nNúmero de coincidencias: "+bo)
}
function Ejercicio3(a, b) {
    console.log("Personas: " + a.join("/") + "\nArray donde bucar: " + b.join("/"))
    if (a.every(n => b.some(o => o == n)))
        console.log("Todos incluidos")
    else if (a.some(n => b.some(o => o == n)))
        console.log("Alguno incluido")
    else
        console.log("Ninguno incluido")
}

/*Array original*/
Ejercicio3(["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"], ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"])
/*Ninguno incluído*/
Ejercicio3(["Lina Armida Machado Iglesias", "Apolonia Santiago Buendía", "Poncio Cobo Herrera", "Rafaela Seco Cañas", "Fulgencio Alarcón Lloret"
], ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"])
/*Alguno incluido*/
Ejercicio3(["Elisabet Ricart Monreal", "Poncio Cobo Herrera", "Isaac Talavera Luna"], ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"])