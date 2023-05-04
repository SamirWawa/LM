'use strict'

loadLDocA("ejercicio2.txt")
function gestionarFicheroTXT(txtDoc){
    let texto = txtDoc.split("\n")
    let i = 0
    texto.forEach(element => {
        if (i%2==0)
            document.querySelector("#inicio").innerHTML += "<div id=\"der\">" + element + "</div>"
        else
        document.querySelector("#inicio").innerHTML += "<div id=\"izq\">" + element + "</div>"
        i++
    });
}
setInterval(gestionarFicheroTXT, 10000)