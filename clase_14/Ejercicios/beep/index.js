/* **************************************************************************
Ejercicio: Beeper

1. Creá un HTML que tenga un botón (podés usar un tag <button>) que diga "BEEP".
2. Creá un archivo .js y vinculalo a tu HTML usando un tag <script>. Ahí vas a 
    escribir tu código JavaScript.
3. Seleccioná el botón y agregá un eventListener para que cada vez que un usuario 
    haga click en el botón se ejecute una Función (callback) que seleccione el <body> 
    y le agregue un párrafo <p> al final que diga "BEEP".
🛎 Recordá: innerHTML no funciona bien con Eventos. En vez, usá 🔍 insertAdjacentHTML.

4. Creá un archivo .css, vinculalo a tu HTML y creá una Clase que se llame .color 
    y dale un color de fondo.
5. Volvé a la Función callback del Evento y agregale una línea que cambie el color
    del <body> con cada click.
/----------------------------------------------------------------------------*/

let button = document.querySelector("button");
button.addEventListener("click", callBack);
let body = document.querySelector("body");

function callBack() {
    body.insertAdjacentHTML("afterend", "<p>beep</p>")
    body.classList.toggle("color");
}