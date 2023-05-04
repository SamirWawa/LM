'use strict'

loadLDocA("libros.xml")
function gestionarFicheroXML(xmlDoc) {
    let librerias = xmlDoc.querySelectorAll("libreria")
    let barato = 0

    librerias.forEach(libreria => {
        let libros = libreria.querySelectorAll("libro")
        let nombre = libreria.querySelector("nombre")
        document.querySelector("main").innerHTML += "<div><h2>" + nombre.textContent + "</h2>"
        libros.forEach(libro => {
            let titulo = libro.querySelector("titulo")
            let precio = libro.querySelector("precio")
            if (precio.textContent < barato) {
                barato = precio.textContent
                document.querySelector("main").innerHTML += "<div id=\"espacio\" id=\"color\"><div>" + titulo.textContent + "</div><div>" + precio.textContent + "</div></div>"
            }
            else
                document.querySelector("main").innerHTML += "<div id=\"espacio\"><div>" + titulo.textContent + "</div><div>" + precio.textContent + "</div></div>"
        })
        document.querySelector("main").innerHTML += "</div>"
        barato = 0
    });

}