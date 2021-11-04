/*              LISTA DEL SUPER PARTE III             */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let colores = ["Rojo", "Azul", "Verde", "Amarillo"]

numbers.forEach(function (color) {
    if (color % 3 === 0) {
        console.log(color)
    }
})


/*

Lista de Súper - Parte III
Volvé al ejercicio anterior y seguí estos pasos:

Usá un for Loop y mostrá cada ítem de listaDeSuper en la consola.
Refactoreá tu código de manera tal que el for loop viva dentro de una Función que se llame logItems. La Función deberá tomar un Arreglo como Parámetro e imprimir sus elementos en la consola.
Invocá logItems 2 veces, pasando listaDeSuper la primera vez y otro Arreglo la segunda vez (deberás crear uno nuevo).
Refactoreá el código de logItems para que use .forEach() en vez de un for loop.

*/