/* *********************************************************
                            SHUFFLE
1.  En tu HTML creá un <div> con ID source y otro con ID destination 
    (ambos con texto adentro).
2.  Seleccioná ambos y guardalos en sus respectivas Variables.
3.  Luego, intercambiá el contenido entre ambos <div>
    (es decir, que el texto del <div> de ID source pase al de ID 
    destination y viceversa).
************************************************************/
let source = document.querySelector('#source');
let destination = document.querySelector('#destination');
let currentText = destination.textContent

destination.textContent = source.textContent;
source.textContent = currentText;
/////////////////////////////////////////////////////////////












