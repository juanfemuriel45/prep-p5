/* **************************************************************************
Manipular CSS
1.  Creá un documento HTML con un <div> adentro.
2.  Usando la Propiedad style del elemento en JavaScript, dale a ese 
    <div> altura, ancho y un color de fondo.
3.  Creá la clase .square en tu stylesheet, y dale las mismas Propiedades.
4.  Ahora en vez de agregársela con la Propiedad style, hacelo con la 
    Propiedad classList.
    ¿Que devuelve div.classList?
5.  Desde tu consola, sacá la clase .square al <div>.
6.  Hacé una Función que cada un segundo (setInterval()) se fije si tiene la 
    clase .square. 
    Si la tiene, que se la quite; si no la tiene, que se la agregue.
/----------------------------------------------------------------------------*/
//paso 6

setInterval('validar()',1000);

function validar() {
    console.log('entro a la funcion');
    let div = document.querySelector('div');
    div.classList.toggle('square')
}

//////////////////////////////////////////////////////////////////////////////