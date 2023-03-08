'use strict'
function Ejercicio1(texto, bool, array){
    let total = 1

    if(typeof(texto) == "string" || typeof(bool) == "boolean" || typeof(array)== "array")
    {
        if(bool==true)
        {
            array.forEach(function(i){
                total = total*i
            })
            if(total>100)
            {
            if(texto.includes("a"))
                    console.log("La letra \"a\" no esta permitida")
                else
                    console.log("Muy bien, no has usado la \"a\"")
            }
            else
                console.log("Array insuficiente para comprobar la cadena")
            
        }
        alert("Se acabó el juego")
    }
    else
        console.log("Datos incorrectos")
}
Ejercicio1()
Ejercicio1("hola mundo",true,[1,2,3,4],()=>{alert("Se acabó el juego")})
Ejercicio1("hola mundo",true,[1,2,3,40],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",true,[10,20,30,40],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",false,[10,20,30,40],()=>{alert("Se acabó el juego")})