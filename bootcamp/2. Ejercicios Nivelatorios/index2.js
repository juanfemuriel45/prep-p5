/*--------------------------------------------------------------------------------------------------------------------/
1. LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en
la consola cada número del loop.
En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El
número x es par”. 
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD
function loopDePares(number){
    let suma =0;
    for(let i=0; i<=100; i++){
        suma = i+number
        console.log(`loop # ${i}`)
        if(suma%2 ==0){
            console.log(`... el numero (${i} + ${number})=> ${i+number} es par`)
        }
    }
}
=======


>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
//loopDePares(7);
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 
mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, 
muestre en la consola la palabra pasada por parámetro.
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD
function loopDeImpares(number, word){
    let suma =0;
    for(let i=0; i<=100; i++){
        suma = i+number
        console.log(`loop # ${i}`)
        if(suma%2 ==0){
            console.log(`... el numero (${i} + ${number})=> ${i+number} es par ..${word}`)
        }
    }
}

// loopDeImpares(2,'Juan Felipe');
=======


//loopDeImpares(2,'Juan Felipe');
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
3. Sumatoria
    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de 
    todos sus números anteriores, incluso ese mismo.
<<<<<<< HEAD
---------------------------------------------------------------------------------------------------------------------*/
function sumattion(number){
    let sum=number;
    for(let i=0; i<number; i++){
        sum+=i;
    }
    return sum
}

// console.log(sumattion(2));
=======

---------------------------------------------------------------------------------------------------------------------*/


//console.log(summation(8));
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
4. Callback
    Debes crear una Función llamada callback que reciba como Parámetros un número y una Función. Esta deberá retornar
     el resultado de esa función pasándole como argumento el número que llega por parámetro.

    Ejemplo:
    callback(5, (num)=>{return num*10}) debe retornar 50
    callback(25, (num)=>{return num/5}) debe retornar 5
<<<<<<< HEAD
---------------------------------------------------------------------------------------------------------------------*/
function callback(number, fn){
    let resultado = fn(number);
    return resultado;
}
=======

---------------------------------------------------------------------------------------------------------------------*/

>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7

// console.log(callback(5, (num)=>{return num*10}));
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
5. Nuevo Arreglo
<<<<<<< HEAD
    Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo 
    con tantos elementos como el número que le hayas pasado.
    Ejemplo: 
    nuevoArreglo(5) debe retornar [1,2,3,4,5]
    nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
---------------------------------------------------------------------------------------------------------------------*/
function nuevoArreglo(array){
    let newArray=[];
    for (let i = 0; i < array; i++) {
        newArray.push(i+1)
    }
    return newArray
}
// console.log(nuevoArreglo(5));
/**********************************************************************************************************************/


=======

    Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo 
    con tantos elementos como el número que le hayas pasado.

    Ejemplo: 
    nuevoArreglo(5) debe retornar [1,2,3,4,5]
    nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

---------------------------------------------------------------------------------------------------------------------*/


//console.log(nuevoArreglo(10));
/**********************************************************************************************************************/



>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/*--------------------------------------------------------------------------------------------------------------------/
6. Similar String.split()
    Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original 
    Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD
function split(str){
    let array=[]
    for(let i=0; i<str.length; i++){
        array.push(str[i])
    }
    return array;
}
// console.log(split("felipe"));
=======


//console.log(split("felipe"));
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
7. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s”
<<<<<<< HEAD
---------------------------------------------------------------------------------------------------------------------*/
function middleCharacter(str){
    let longitud = Math.round(str.length/2);
    let resultado
    for(let i=0; i<str.length; i++){
        if(longitud%2==0){
            resultado =(str[longitud-1]).concat(str[longitud])
        }else{
            resultado =str[longitud-1]
        }
        return resultado
    }
}
// console.log(middleCharacter("pasea"));
=======

---------------------------------------------------------------------------------------------------------------------*/



//middleCharacter("hola");
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
8. Mover ceros a lo último
    Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` 
    ordenados al final.

Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
=======
function moveZeros(arr){
    let ceros = []
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            ceros.push(arr[i])
        }else{
            newArr.push(arr[i])
        }
    }
    newArr= newArr.concat(ceros)
    return newArr
}
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
<<<<<<< HEAD
9. Manejando dos arreglos
=======
9. Manejando dos arreglos   ---  4 minutos
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y 
muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD

=======
function arrayHandler(arr1, arr2){
    for(let i=0; i<arr1.length; i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
}
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
//console.log(arrayHandler([1,2,3,4], ['h','o','l','a']))
/**********************************************************************************************************************/

/*--------------------------------------------------------------------------------------------------------------------/
<<<<<<< HEAD
10. Mezclando arreglos
=======
10. Mezclando arreglos --- 3 minutos
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los
elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD

=======
function mezclarArreglos(arr1, arr2){
    let newArray=[]

    for (let i = 0; i < arr1.length; i++) {
        newArray.push(arr1[i])
        newArray.push(arr2[i])
    }
    return newArray
}
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
// console.log(mezclarArreglos([1,2,3,4], ['h','o','l','a']))
/**********************************************************************************************************************/

/*--------------------------------------------------------------------------------------------------------------------/
<<<<<<< HEAD
11. Arreglos
=======
11. Arreglos ---- 40 minutos
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al igual que lo hiciste
 en el ejercicio número 5: 

1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
---------------------------------------------------------------------------------------------------------------------*/

<<<<<<< HEAD


=======
function join(arr, caracter){
    string ="";
    arr.forEach(element => {
        string= string.concat(element + caracter)
    });
    return string
}

function pop(arr){
    return arr[arr.length-1]
}

function filter(arr, fn){
    let result = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i])==1){
            result.push(arr[i]);
        }
    }
    return result;
}

function map(arr, fn){
    let resultado=[]
    for(let i=0; i<arr.length; i++){
        resultado.push(fn(arr[i]))
    }
    return resultado;
}

// console.log("replica de join: " + join([1,2,3,4,5], ' '));
// console.log("replica de pop: " + pop([1,2,3,4,5]));
// console.log("replica de filter: " + filter([1,2,3,4,5], (e)=>{return e%2===0}));
//console.log("replica de Map: " + map([1,2,3,4,5], (e)=>{return e * 10}));
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/



/*--------------------------------------------------------------------------------------------------------------------/
<<<<<<< HEAD
12. Mínima Suma
=======
12. Mínima Suma --- 5 minutos
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los
 dos números más chicos.

Ejemplo: 
minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
minSum([1, 10, 43, 900, 20, 8]) debe retornar 9
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD


//console.log(minSum([1, 10, 43, 900, 20, 8]))
=======
function minSum(arr){
    let arrOrdenado = arr.sort();
    let sum = arrOrdenado[0]+arrOrdenado[1]
    return sum
}

//console.log(minSum([7, 6, 5, 4, 3, 2, 1]))
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos 
que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
---------------------------------------------------------------------------------------------------------------------*/
<<<<<<< HEAD


//console.log(arregloDeObjetos(3));
=======
function arregloDeObjetos (number){
    let array=[]
    let obj={}
    for(let i=0; i< number; i++){
        obj={valor: i+1}
        array.push(obj)
    }
    return array
}
console.log(arregloDeObjetos(3));
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/


/*--------------------------------------------------------------------------------------------------------------------/
14. Arreglo de objetos 
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un 
arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y 
sus anteriores.

Ejemplo:
arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]
<<<<<<< HEAD
---------------------------------------------------------------------------------------------------------------------*/
function arregloDeObjetos2(number, word){
    let arr=[]
    for (let i = 0; i < number; i++) {
        let obj={}
        obj[word]=i
        arr.push(obj)        
    }
    return arr
}

// console.log(arregloDeObjetos2(5, 'hola'));
=======

---------------------------------------------------------------------------------------------------------------------*/


//console.log(arregloDeObjetos2(3, 'chau'));
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
/**********************************************************************************************************************/

/*--------------------------------------------------------------------------------------------------------------------/
15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. 
Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]
<<<<<<< HEAD
---------------------------------------------------------------------------------------------------------------------*/
function oneProperty(arr, string){
    newArray=[]
    let obj={}

    for (let i = 0; i < arr.length; i++) {
        if(string =='edad'){
            obj={}
            obj[string]=arr[i][string]
            newArray.push(obj)
        }
        if(string == 'name'){
            obj={}
            obj[string]=arr[i][string]
            newArray.push(obj)
        }
    }
    return newArray
}
var  arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ]
console.log(oneProperty(arreglo, 'edad'));
=======


// var  arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ]
// console.log(oneProperty(arreglo, 'edad'));
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
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
<<<<<<< HEAD
function warWords(string1, string2){
    let result =''
    var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
    let sumString1=0
    let sumString2=0

    for(let i=0; i< string1.length; i++){
        sumString1+=abc[string1[i]]
    }

    for(let i=0; i< string2.length; i++){
        sumString2+=abc[string2[i]]
    }

    if(sumString1>sumString2){
        return string1
    }else{
        return string2
    }
}

// console.log(warWords('love', 'friendship'));
//console.log(warWords('love', 'friendship') )
=======


// console.log(warWords('love', 'friendship'));
// console.log(warWords('hola', 'chau') )
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
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


<<<<<<< HEAD

=======
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
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


<<<<<<< HEAD

var prueba = {
	nombre: 'santi',
	edad: 22,
	nacionalidad: 'de otro planeta',
	documento: 44444444
}

=======
>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
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


<<<<<<< HEAD
=======

>>>>>>> 3bde015cab2edff0b1e81e86d2a3f80140fa6ab7
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


//console.log(consecutivosSimilares('AAAA'));
/**********************************************************************************************************************/
