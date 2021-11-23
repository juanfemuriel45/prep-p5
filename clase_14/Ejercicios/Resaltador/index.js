/* **************************************************************************
Ejercicio: Resaltador
En este ejercicio, deberás escribir un código que te ayude a resaltar los
párrafos en un texto. Para eso, seguí estos pasos:

1.  Creá un documento HTML con al menos cinco párrafos.
2.  Creá una Clase llamada "resaltado" que:
3.  Tenga un color de fondo amarillo.
4.  Tenga un color de letra rojo.
5.  Seleccioná los párrafos y guardalos en una Variable.
6.  Usá un for Loop que recorra todos los párrafos.
7.  Agregá un eventListener() que haga que, cuando el usuario haga click, 
    le ponga o le saque la Clase "resaltado".
/----------------------------------------------------------------------------*/

let parrafos = document.querySelectorAll("p");

for(let i=0 ; i < parrafos.length; i++){
    console.log(this);
   parrafos[i].addEventListener("click",function(){
       this.classList.toggle("resaltado")
   })
}
