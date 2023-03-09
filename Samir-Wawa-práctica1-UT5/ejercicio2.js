'use strict'
function Ejercicio2(...a){
    a.forEach(function(i){
        let cadena = i[0]+"-"+i[1]+"-asignaturas:"
        i.shift()
        i.shift()
        console.log(cadena+i.join("/"))
    });
}
Ejercicio2(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],["Emma", "ASIR","ISO","BBDD","LM"])
Ejercicio2(["Álvaro","Semi","BBDD"])
Ejercicio2()