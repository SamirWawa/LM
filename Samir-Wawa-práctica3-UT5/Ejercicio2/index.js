'use strict'

function generarComida(){
    HTTP.ajax('GET', API_BASE_URL).then((datosComida)=>{
        datosComida.meals.forEach(element => {
            let comida = document.createElement("div")
            comida.appendChild(document.createTextNode(element.strMeal))
            comida.className="Comida"

            let imagen = document.createElement("img")
            imagen.src = element.strMealThumb
            imagen.className = "imagenComida"

            let categoria = document.createElement("div")
            categoria.appendChild(document.createTextNode("Tipo de comida: "+element.strCategory))

            let pais = document.createElement("div")
            pais.appendChild(document.createTextNode("Procedencia: "+element.strArea))
            
            let tutorial = document.createElement("a")
            tutorial.href=element.strYoutube
            tutorial.appendChild(document.createTextNode(element.strYoutube))

            comida.appendChild(imagen)
            comida.appendChild(categoria)
            comida.appendChild(pais)
            comida.appendChild(tutorial)

            document.querySelector("main").appendChild(comida)
        });
        
    })
}
generarComida()
