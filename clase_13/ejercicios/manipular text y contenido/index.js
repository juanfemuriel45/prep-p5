/* **************************************************************************
Ejercicio: Manipular Texto Y Contenido:
1.  Creá un archivo HTML que, dentro de su <body> solo tenga un título <h1>.
2.  Por consola, cambiá el texto del título.
3.  Por consola, cambiá el título por un párrafo con un texto a elección.
4.  Por consola, agregá otro párrafo al <body> con un texto a elección.
/----------------------------------------------------------------------------*/
//paso 1
let h1 = document.querySelector("h1");
//paso 2
h1.textContent = "PASO 2";
//paso 3
h1.innerHTML = '<p>Paso 3<p>';
//Paso 4
let body = document.querySelector('body');
let parrafo = document.createElement("p")
parrafo.textContent = "ESTE ES EL PASO 4 AGREGAR UN P DESDE CONSOLA"
body.appendChild(parrafo)

//////////////////////////////////////////////////////////////////////////////