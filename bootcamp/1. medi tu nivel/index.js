/******************************************************/
//EJERCICIO1 
function loopDePares() {
    for (let i = 0; i <= 100; i++) {
        (i % 2)
    }
}
console.log('Ejercicio 1 ****************');
/*-----------------------------------------------------*/
console.log('RESPUESTA: Ninguna de las anteriores');
/******************************************************/


/******************************************************
//EJERCICIO2 
Ejercicio 2: Nuevo Arreglo
La siguiente Función, llamada "nuevoArreglo", recibe 
un número como parámetro y devuelve un nuevo Arreglo
con la cantidad de elementos igual al número recibido.
Los elementos del Arreglo estarán ordenados de forma 
ascendente, comenzando por el número 1.

Por ejemplo, nuevoArreglo(5) retorna: [1, 2, 3, 4, 5], 
mientras que nuevoArreglo(10) retorna[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
/*-----------------------------------------------------*/
console.log('Ejercicio 2 ****************');

function nuevoArreglo(number){
    let newArray = [];
    for (let i= 0; i < number; i++){
        //Completa
        newArray[i] = i + 1;
    }
    return newArray;
}
console.log(nuevoArreglo(10));
/*-----------------------------------------------------*/
console.log('RESPUESTA: newArray[i] = i + 1;');
/******************************************************/



/****************************************************** 
Ejercicio 3: oneProperty
La siguiente Función, llamada "oneProperty", recibe como 
parámetro un Arreglo de Objetos y un String.

Deberás completar el código para que retorne un nuevo 
Arreglo de Objetos, donde cada objeto tendrá como propiedad
 el String recibido como parámetro, y tendrá como valor, el 
 valor correspondiente para esa propiedad en los objetos que
  se encuentran dentro del Arreglo recibido como párametro. 

Veamos un ejemplo.

let arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ] 

oneProperty(arreglo, "edad") debe retornar [ { edad: 20 }, { edad: 22 } ] 
oneProperty(arreglo, "name") debe retornar [ { name: "lucas"}, { name: "santi" } ]
/*-----------------------------------------------------*/
console.log('Ejercicio 3 ****************');

let arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ] 

function oneProperty(arr, prop) {
    let nuevoArr = [];
    for (let i=0; i< arr.length; i++){
        let obj = {}
        //completa

        nuevoArr.push(obj);
    }
    return nuevoArr;
}
//llamamos la funcion
console.log(oneProperty(arreglo, "edad") );

/*-----------------------------------------------------*/
console.log('RESPUESTA: Ninguna de las anteriores');
/******************************************************/



/****************************************************** 
Ejercicio 4: summation

La siguiente Función, llamada "summation", recibe como parámetro un número.

Deberás completar el código para que retorne la sumatoria 
de todos los números anteriores (incluyendo el número ingresado).

Veamos unos ejemplos.

summation(3) debe retornar 6 porque suma (1 + 2 + 3) 
summation(8) debe retornar 36 porque suma (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
/*-----------------------------------------------------*/
console.log('Ejercicio 4 ****************');

function summation(number) {
    let sum = number;
    //completa
    for (let i = 0; i < number; i++){
        sum += i;
    }
    return sum;
}

console.log(summation(8));
/*-----------------------------------------------------*/
console.log('RESPUESTA: ');
/******************************************************/



/****************************************************** 
Ejercicio 5: middleCharacter
La siguiente Función, llamada "middleCharacter", recibe 
como parámetro un String.

Deberás completar el código para que retorne el o los 
caracteres del medio, según corresponda.

Veamos unos ejemplos.

middleCharacter("plataforma5") debe retornar "f".
middleCharacter ("hola") debe retornar "ol". 
middleCharacter ("cosas") debe retornar "s".
-----------------------------------------------------*/
console.log('Ejercicio 5 ****************');

const middleCharacter = (string) => {
    let posicion;
    let largo;
    if (string % 2 !== 0){
        posicion = string.length /2;
        largo = 1
    }else{
        posicion = string.length /2 -1;
        largo = 2;
    }
    //console.log(string, substring(posicion, posicion + largo));
    console.log(string, substring(posicion, posicion + largo));
};

middleCharacter("hola");

//-----------------------------------------------------
console.log('RESPUESTA: ');
//******************************************************

/*RESUMEN  
1. MAL
2. OK
3. OK
4. OK
5. MAL
*/