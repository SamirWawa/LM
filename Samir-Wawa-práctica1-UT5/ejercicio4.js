'use strict'

let alumnos = [
    { nombre: 'Juan', edad: 25},
    { nombre: 'Ana', edad: 30},
    { nombre: 'Pedro', edad: 40}
  ]
  let a = []
  a = alumnos.map(({nombre, edad, curso})=>({nombre: nombre, edad: edad, curso: '1DAMA'}))
  console.log(a)