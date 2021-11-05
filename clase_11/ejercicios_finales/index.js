/* *********************************************************
                 Lista de Súper - Parte III
************************************************************

    function logItems(items) {
        //Solucion con loop for
        //  for(let i=0; i<items.length;i++){
        //      console.log(`Item ${i}: ${items[i]}`);
        //    }

        //Solucion con loop forEach
        items.forEach(item => {
            console.log(`Item: ${item}`);
        });
    }

    //Aqui se crean los array y se invoca la funcion
    let items = ['pera', 'carne', 'azucar'];
    logItems(items);

    let items2 = ['sal', 'pimienta', 'ajo'];
    logItems(items2);
/////////////////////////////////////////////////////////////


/* *********************************************************
                          REVERSE
************************************************************
    
    function printReverse(array){
        console.log(array.reverse());
    }

    function reverser(array){
        arrayInvertido = array.reverse();
        return arrayInvertido;
    }

    //se declaran los array
    let array1 = ['a','b','c','d'];
    let array2 = [1,2,3,4];
    //se invoca la funcion
    printReverse(array1);
    console.log(reverser(array2));

/////////////////////////////////////////////////////////////


/* *********************************************************
                          SumArray()
************************************************************

    function sumArray(array){
        let suma = 0;
        for(let i=0; i<array.length; i++){
            suma += array[i];
        }
        return suma;
    }

    let resultado = sumArray([1,2,3,4,5]);
    console.log('La suma del array es: ' + resultado);

/////////////////////////////////////////////////////////////

/* *********************************************************
                  Simulacion array.join()
************************************************************

function join(array) {
    let texto = "";

    for (let i = 0; i < array.length; i++) {
        texto += array[i];
    }
    return texto;
}

let resultado = join(["h", "o", "l", "a"]);
console.log('El join seria asi: ' + resultado);

/////////////////////////////////////////////////////////////

/* *********************************************************
                    Poema Desordenado
************************************************************

function ordenarPoema(array){
    let arregloOrdenado = [];
    while(array.length>0){
        arregloOrdenado.push(array.shift());
        arregloOrdenado.push(array.pop());
    }
    return arregloOrdenado;
}

let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"
let arregloDesordenado = poemaDesordenado.split(' ');
let poemaOrdenado = ordenarPoema(arregloDesordenado).join(' ') 

console.log('El poema ordenado es: ' + poemaOrdenado);

/////////////////////////////////////////////////////////////

/* *********************************************************
                        isUniform()
************************************************************/

array1=['a','b','p'];

function isUniform(array){
    let validacion = true;
        for(let i=1; i<array.length; i++){
            if(array[i]!=array[i-1]){
                validacion=false;
                break;
            }
        }
    return validacion;
}
console.log('La validacion es: ' + isUniform(array1));

/////////////////////////////////////////////////////////////


/* *********************************************************
                        Biggest Smallest
************************************************************/



/////////////////////////////////////////////////////////////




/* *********************************************************
                        To Do List
************************************************************/



/////////////////////////////////////////////////////////////