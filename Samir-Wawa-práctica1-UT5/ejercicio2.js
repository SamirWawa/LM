'use strict'
function verAsignaturas(b){
    let cadena = (b[0]+"-"+b[1]+"-asignaturas: ")
    b.shift()
    b.shift()
    b.forEach(function(i){
        cadena+=i
        cadena+="/"
    })
    console.log(cadena)
}
function Ejercicio2(a){
    a.forEach(function(i){
        verAsignaturas(i)
    });
}
Ejercicio2(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],["Emma", "ASIR","ISO","BBDD","LM"])
Ejercicio2(["Álvaro","Semi","BBDD"])
Ejercicio2()