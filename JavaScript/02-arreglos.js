var arreglo = [
    1,2,"hola",
    true,

    {

    },
    undefined,
    null,
    [],
    new Date,

];

console.log(arreglo);

var arreglo2= [];
// push permite agregar elementos al arreglo al final
arreglo.push(3);
console.log('ARREGLOD DOS: ',arreglo2);
// pop permite eliminar e ultimi elemnto del arreglo
arreglo2.pop();

// splice (posicion donde agregar, numeros de elementos a reemplazar, lo que se desea ingresar)
var numeros = [1,2,3,4,5,6];
numeros.splice(1,1,69)
console.log(numeros)

// eliminar elementos del arreglo del arreglo desde y hasta una posicion
numeros.splice(3,5);
console.log(numeros);

// buscar un elemento
var indiceElemento = numeros.indexOf(69)
console.log(indiceElemento);

// unir elementos
// destructuracion de arreglos
var arregloUno = [1,2,3,4];
var arregloDos= [5,6,7,8];
var arregloCompleto = [...arregloUno, ...arregloDos]
console.log(arregloCompleto);

var datosPersonales = {
    nombre : "Anderson",
    apellido : "Revelo",
    edad : 24
}

var tipoUsuario = {
    numeroUnico: 2345224,
    estado : true,
    permisos : [
        "admin",
        "editor"]

}

var datosUsuario = {
    ...datosPersonales,
    ...tipoUsuario
}

console.log(datosUsuario)
var atributosObjeto = Object.keys(datosUsuario);
console.log(atributosObjeto);
console.log(datosUsuario[atributosObjeto[3]])