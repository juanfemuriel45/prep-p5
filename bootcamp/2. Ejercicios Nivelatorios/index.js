/*--------------------------------------------------------------------------------------------------------------------/
1. LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en
la consola cada número del loop.
En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El
número x es par”. 
---------------------------------------------------------------------------------------------------------------------*/

function loopDePares(num) {
    for (let i = 1; i <= 100; i++) {
        let sum = num + i;
        if (sum % 2 == 0) {
            console.log(i);
            console.log('El numero ' + (sum) + ' es par');
        } else {
            console.log(i);
        }
    }
}
//loopDePares(7);
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 
mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, 
muestre en la consola la palabra pasada por parámetro.
---------------------------------------------------------------------------------------------------------------------*/

function loopDeImpares(num, palabra) {
    for (let i = 0; i < 100; i++) {
        let sum = num + i;

        console.log(i);
        if (sum % 2 != 0) {
            console.log(palabra);
        }
    }
}
//loopDeImpares(2,'Juan Felipe');
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
3. Sumatoria
    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de 
    todos sus números anteriores, incluso ese mismo.

---------------------------------------------------------------------------------------------------------------------*/

function summation(number) {
    let sum = number;
    //completa
    for (let i = 0; i < number; i++) {
        sum += i;
    }
    return sum;
}
//console.log(summation(8));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
4. Callback
    Debes crear una Función llamada callback que reciba como Parámetros un número y una Función. Esta deberá retornar
     el resultado de esa función pasándole como argumento el número que llega por parámetro.

    Ejemplo:
    callback(5, (num)=>{return num*10}) debe retornar 50
    callback(25, (num)=>{return num/5}) debe retornar 5

---------------------------------------------------------------------------------------------------------------------*/

function callback(num, fn){
    return fn(num);
}
// console.log(callback(5, (num)=>{return num*10}));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
5. Nuevo Arreglo

    Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo 
    con tantos elementos como el número que le hayas pasado.

    Ejemplo: 
    nuevoArreglo(5) debe retornar [1,2,3,4,5]
    nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

---------------------------------------------------------------------------------------------------------------------*/

function nuevoArreglo(number){
    let newArray = [];
    for (let i= 0; i < number; i++){
        //Completa
        newArray[i] = i + 1;
    }
    return newArray;
}
//console.log(nuevoArreglo(10));
/**********************************************************************************************************************/



/*--------------------------------------------------------------------------------------------------------------------/
6. Similar String.split()
    Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original 
    Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
---------------------------------------------------------------------------------------------------------------------*/

function split(string){
    let cadena = [];
    for(let i =0 ; i<string.length; i++){
        cadena[i]=string[i];
    }
    return cadena;
}
//console.log(split("felipe"));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
7. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s”

---------------------------------------------------------------------------------------------------------------------*/

function middleCharacter (string) {
    let largo = string.length;
    let posicion = Math.round((largo/2)-1)
    let result ="";
    if(largo%2 == 0){
        let caracter1 = string[posicion];
        let caracter2 = string[posicion+1];
        result = caracter1.concat(caracter2);
    }else{
        result = string[posicion];
    }
    return result
};

//middleCharacter("hola");
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
8. Mover ceros a lo último
    Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` 
    ordenados al final.

Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

---------------------------------------------------------------------------------------------------------------------*/
function moveZeros(array) {
    let array2=[];
    let array3=[];
    for(let i=0; i<array.length; i++){
        //se valida si contien 0
        if(array[i] === 0){
            array3.push(0);
        }else{
            array2.push(array[i]);
        }
    }
    array = array2.concat(array3)
    return array  
}

//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
9. Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y 
muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
---------------------------------------------------------------------------------------------------------------------*/
function arrayHandler(array1, array2) {
    for(let i=0; i<array1.length; i++){
        console.log("hola soy " + array1[i] + " y yo soy " + array2[i]);
    }
}
//console.log(arrayHandler([1,2,3,4], ['h','o','l','a']))
/**********************************************************************************************************************/

/*--------------------------------------------------------------------------------------------------------------------/
10. Mezclando arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los
elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

---------------------------------------------------------------------------------------------------------------------*/
function mezclarArreglos(array1, array2) {
    let array3=[];
    for(let i=0; i<array1.length; i++){
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    return array3
}
//console.log(mezclarArreglos([1,2,3,4], ['h','o','l','a']))
/**********************************************************************************************************************/

/*--------------------------------------------------------------------------------------------------------------------/
11. Arreglos
Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al igual que lo hiciste
 en el ejercicio número 5: 

1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
---------------------------------------------------------------------------------------------------------------------*/
function replicaJoin(array){
    let resultado = array.join(' ');
    return resultado;
}

function replicaPop(array){
    let resultado = array.pop();
    return resultado;
}

function replicaFilter(array, fn){
    resultado = array.filter(fn)
    return resultado;
}

function replicaMap(array, fn){
    resultado = array.map(fn)
    return resultado;
}

//console.log("replica de join: " + replicaJoin([1,2,3,4,5], ' '));
//console.log("replica de pop: " + replicaPop([1,2,3,4,5], ' '));
//console.log("replica de filter: " + replicaFilter([1,2,3,4,5], (e)=>{return e%2===0}));
//console.log("replica de Map: " + replicaMap([1,2,3,4,5], (e)=>{return e * 10}));
/**********************************************************************************************************************/



/*--------------------------------------------------------------------------------------------------------------------/
12. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los
 dos números más chicos.

Ejemplo: 
minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
minSum([1, 10, 43, 900, 20, 8]) debe retornar 9
---------------------------------------------------------------------------------------------------------------------*/

function minSum(array){
    let sum=0;
    //se ordena y se guarda en un nuevo array
    arrayOrdenado=array.sort(function(a, b) {
        return a - b;
    })
    //se extraen los dos primeras posiciones
    let minimo = arrayOrdenado.shift();
    let minimo2 = arrayOrdenado.shift();
    //se suman
    sum= minimo+minimo2;

    return sum
};
//console.log(minSum([1, 10, 43, 900, 20, 8]))
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos 
que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
---------------------------------------------------------------------------------------------------------------------*/
function arregloDeObjetos(num) {
    let array =[];
    let objeto;
    for(let i=0; i<num; i++){
        objeto ={valor: i+1}
        array.push(objeto)
    }
    return array
}

//console.log(arregloDeObjetos(3));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
14. Arreglo de objetos 
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un 
arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y 
sus anteriores.

Ejemplo:
arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]

---------------------------------------------------------------------------------------------------------------------*/
function arregloDeObjetos2(num, palabra) {
    let array =[];                   //se crea el array
    for(let i=0; i<num; i++){        //se recorre el array
        let objeto ={};              //se crea el objeto
        objeto[palabra]=i+1          //se agrega el atributo con la posicion +1
        array.push(objeto)           //se agrega el objeto al array
    }
    return array;                    //se retorna el array
}

//console.log(arregloDeObjetos2(3, 'chau'));
/**********************************************************************************************************************/

/*--------------------------------------------------------------------------------------------------------------------/
15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. 
Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]
---------------------------------------------------------------------------------------------------------------------*/
function oneProperty(array, string) {
    let array2 =[];
        //se recorre el array
        for(let i=0; i<array.length; i++){
            if(string=='edad'){                 //se valida cada parametro
                let obj={}                      //se crea el objeto
                obj[string]=array[i][string]    //se agregan los atributos al objeto
                array2.push(obj);               //Se agrega el objeto al array
            }
            if(string=='name'){
                let obj={}
                obj[string]=array[i][string]
                array2.push(obj);
            } 
        }
    return array2;
}

// var  arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ]
// console.log(oneProperty(arreglo, 'edad'));
/**********************************************************************************************************************/



/*--------------------------------------------------------------------------------------------------------------------/
16. Guerra de palabras
 	Utils: 
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la 
suma del valor de sus letras (dado por su posición en el abecedario).

Ejemplo:
warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
warWord(“love”, “friendship”) debe retornar “friendship”
---------------------------------------------------------------------------------------------------------------------*/
function warWords(palabra1, palabra2) {
    //se divide el string y se guarda en un array
    let arrayPalabra1 = palabra1.split('');
    let arrayPalabra2 = palabra2.split('');
    //se envia el array a la funcion que hace la cuenta y se guarda en una variable
    let valorPalabra1 = extraerValor(arrayPalabra1);
    let valorPalabra2 = extraerValor(arrayPalabra2);
    let resultado = '';
    //se valida cual valorPalabra es mayor
    if(valorPalabra1 > valorPalabra2){
        resultado = `${palabra1} (${valorPalabra1} > ${valorPalabra2})` ;
    }else{
        resultado = `${palabra2} (${valorPalabra1} < ${valorPalabra2})` ;
    }
    return resultado; //se retorna el resultado
}

function extraerValor(array){
    let sum=0;
    //se recorre el array y se va acumulando el valor en la variable sum
    for(let i=0; i<array.length; i++){
        var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
        sum+= abc[array[i]]; 
    }
    return sum
}

// console.log(warWords('love', 'friendship'));
// console.log(warWords('hola', 'chau') )
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
17. Prefijos Telefónicos
	Utils:
	var prefijos = [54, 55, 56, 57, 58]
 var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el 
país correspondiente a cada prefijo.
ejemplo : 

{
	54: “Argentina”,
	55: ”Brasil”,
	56: ”Ecuador”,
	57: ”Bolivia”
}


Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso 
de ser correcto, deberá retornar “Este número pertenece a X”.
En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

Ejemplo: 
validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”
---------------------------------------------------------------------------------------------------------------------*/

function validarPrefijo(num){
    var prefijos = [54, 55, 56, 57, 58]
    var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"];
    obj={}
    let resultado;
    //se recorren los array y se guardan en el objeto
    for(let i=0; i< prefijos.length; i++){
        obj[prefijos[i]]=paises[i];
    }
    //se extraen los dos primeros numeros del parametro num
    let numerosIniciales=num[0].concat(num[1]);
    //validar si el prefijo existe en el objeto
    if(numerosIniciales in obj){
        resultado = `Este numero pertenece a ${obj[numerosIniciales]}`
    }else{
        resultado = `El número no pertenece a nuestros países`
    }
    //se retorna la respuesta
    return resultado;
}

//console.log(validarPrefijo('5912345678'));
/**********************************************************************************************************************/



/*--------------------------------------------------------------------------------------------------------------------/
18. {value: key} kelue: vay

Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, 
deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un 
string puestas como key y el value deberá ser el key anterior.

	Ejemplo:
    reverseKeys(344) debería devolver “error, input can’t be a number”
    reverseKeys([ ]) debería devolver “error, input can’t be an Array”
    reverseKeys(‘hola’) debería devolver “error, input can’t be a string”


var prueba = {
	nombre: ‘santi’,
	edad: 22,
	nacionalidad: ‘de otro planeta’,
	documento: 44444444
	
}
reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’, 
edad: 22,
‘’de otro planeta”: nacionalidad,
 documento: 44444444
}

---------------------------------------------------------------------------------------------------------------------*/

function reverseKeys(obj){
    let tipo= typeof obj;
    let resultado;
    //se valida si el dato es object o no
    if (tipo != 'object'){
        resultado = `error, input can’t be a ${tipo}`
    }else{
        //se hace una segunda validacion si es un array
        if(Array.isArray(obj)){
            resultado = `error, input can’t be an Array`
        }else{
            let newObj={};
            //se extraen los valores del objeto
            let values = Object.values(obj)
            //se extraen los keys del objeto
            let keys = Object.keys(obj)
            for(let i=0; i<values.length; i++){
                //se valida si el valor del atributo es string
                if(typeof values[i]== 'string'){
                    //se intercambia de lugar el valor y la key
                    newObj[values[i]]=keys[i]            
                }else{
                     //se agregan los datos restantes al nuevo objeto
                    newObj[keys[i]]=values[i]           
                }
            }
            resultado = newObj                           
        }
    }
    return resultado;
}

var prueba = {
	nombre: 'santi',
	edad: 22,
	nacionalidad: 'de otro planeta',
	documento: 44444444
}

//console.log(reverseKeys(prueba));
/**********************************************************************************************************************/



/*--------------------------------------------------------------------------------------------------------------------/
19. Palindromo
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el 
caso que sea, y false en el caso que no.


Ejemplo: 

palindromo(“anilina”) debe retornar true
palindromo(“Ana”) debe retornar true
palindromo(“Enrique”) debe retornar false
---------------------------------------------------------------------------------------------------------------------*/

function palindromo(palabra){
    let palabraArray = palabra.split('');
    let palabraArray2 = palabra.split('') //se crea una copia del array principal
    let palabraReverse = palabraArray.reverse();
    let resultado;

    for(let i=0; i<palabraArray2.length; i++){
        if(palabraArray2[i] === palabraReverse[i]){
            resultado = true;
        }else{
            resultado = false;
            break;
        }
    }
    return resultado;
}

//console.log(palindromo('oso'));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
20. Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los
 elementos rotados la cantidad de veces como sea el número a la derecha.

Ejemplo: 
rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]
---------------------------------------------------------------------------------------------------------------------*/
function rotar(array, num){
    let newArray= [];
    for(let i=0; i<num; i++){                     
        let cola = array[array.length-1];         
        for(let j=0; j<array.length-1; j++){      
            newArray[j+1]=array[j]                
        }
        newArray[0]=cola;                         
        array=newArray.slice();                   
    }
    return newArray;                              
}

function rotar(array, num){
    let newArray= [];
    for(let i=0; i<num; i++){                     //se recorre el array segun el valor del parametro 'num'
        let cola = array[array.length-1];         //se guarda el ultimo numero del array en la variable 'cola'
        for(let j=0; j<array.length-1; j++){      //se recorre el array y se hacer la rotacion
            newArray[j+1]=array[j]                
        }
        newArray[0]=cola;                         //se agrega en el indice [0] la variable 'cola' que es el ultimo numero anterior
        array=newArray.slice();                   //se hace una copia exacta del newArray
    }
    return newArray;                              //se devuelve el array
}

//console.log(rotar([1, 2, 3, 4, 5], 3));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
21. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares 
hay en un string. 

Ejemplo: 
consecutivosSimilares(“AAAA”) debe retornar 3
consecutivosSimilares(“BBBBB”) debe retornar 4
consecutivosSimilares(“ABABABAB”) debe retornar 0
consecutivosSimilares(“BABABA”) debe retornar 0
consecutivosSimilares(“AAABBB”) debe retornar 4
---------------------------------------------------------------------------------------------------------------------*/
function consecutivosSimilares(string){
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i]==string[i+1]){
            contador++;
        }
    }
    return contador;
}

//console.log(consecutivosSimilares('AAAA'));
/**********************************************************************************************************************/
