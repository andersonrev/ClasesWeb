var nombre;
nombre = "Anderson"

console.log(nombre);

// var permite declarar una variable con o sin color.
// let: variable de tipo loval con o sin valor.
// const : cosntante de solo lectura en un bloque

let x;
console.log(x=10);


var a = 10
console.log(a+1)

var edad= 25 // number
var sueldo = 389.50 // number
var apellido = 'Revelo' // string
var soltero = true //boolean
var hijos = null // object
var autos /// undefined

var fecha = new Date()

console.log(edad,soltero,sueldo,apellido,hijos,autos,fecha);




var estudiante = {

    nombre: 'Anderson',
    apellido: "Revelo",
    suelo: 389.50,
    soltero: true,
    materias: {
        basica: 'Algebra',
        carrera: 'Ingenieria de Sistemas Informáticos y de Computación',
        notaCalificacion: '12'
    }
}

console.log(estudiante)
console.log(estudiante.nombre)


//falsy : 0, null, undefined
if(undefined){
    console.log("verdad")
}else{
    console.log("Falso")
}

//truthy -1, 1, dtring, excepto 0
if(-1){
console.log("Verdadero")
}else{
    console.log("Falso")
}


console.log(soltero + edad);



