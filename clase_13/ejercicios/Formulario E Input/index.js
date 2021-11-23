/* **************************************************************************
Formularios e inputs

1.  Creá un HTML vacío con su respectivo JavaScript.
2.  A través de JavaScript, creá un formulario que contenga los siguientes elementos:
        Un input donde el usuario escriba su nombre y apellido (con su respectivo label).
        Un input donde el usuario escriba su e-mail, con un placeholder.
        Un radio button donde el usuario indique si su género es "Femenino", "Masculino",
         "No binario", "Prefiero no decirlo".

        🛎 Recordá: Si tenemos cuatro opciones o menos, es mejor usar radio button. Si ya
         son más de cinco, recomendamos usar dropdown.
        Un dropdown para que el usuario indique su rango de edad: si es menor a 18 años; 
        19-30; 31-45; 46-55 o mayor a 56.
        Un checkbox para señalar si el usuario es argentino o no.
3.  Una vez terminado el formulario, completalo con tus datos.
4.  Luego, abrí la consola y obtené:
        El nombre y apellido ingresado.
        El e-mail ingresado.
        La palabra seleccionada por género identificado.
        El rango de edad seleccionado.
        El valor true o false en base a si la persona seleccionó ser argentino/a o no.
/----------------------------------------------------------------------------*/

let form = document.createElement("form")
let usuario = document.createElement("input")
usuario.placeholder = "Ingrese su nombre y apellido";

//email
let email = document.createElement("input");
email.type = "email";
email.placeholder = "Julanito@com.co";
//radio boton 
let gFemenino = document.createElement("input");
gFemenino.type = "radio";
gFemenino.id = "gFemenino";
let labelGFemenino = document.createElement("label")
labelGFemenino.setAttribute("for", "gFemenino")
labelGFemenino.textContent = "Femenino";

let gMasculino = document.createElement("input");
gMasculino.type = "radio";
gMasculino.id = "gMasculino";
let labelGMasculino = document.createElement("label")
labelGMasculino.setAttribute("for", "gMasculino")
labelGMasculino.textContent = "Masculino";

let gNBinario = document.createElement("input");
gNBinario.type = "radio";
gNBinario.id = "gNBinario";
let labelGNBinario = document.createElement("label")
labelGNBinario.setAttribute("for", "gNBinario")
labelGNBinario.textContent = "No binario";

let gPNodecirlo = document.createElement("input");
gPNodecirlo.type = "radio";
gPNodecirlo.id = "gPNodecirlo";
let labelGPNodecirlo = document.createElement("label")
labelGPNodecirlo.setAttribute("for", "gPNodecirlo")
labelGPNodecirlo.textContent = "Prefiero no decirlo";

//edad
let edad = document.createElement("select");

//tipo usuario
let tipoUsuario = document.createElement("input")
tipoUsuario.type = "checkbox"

let body = document.querySelector("body");
let br = document.createElement("br");




body.appendChild(form);
form.appendChild(usuario);
form.appendChild(br)
form.appendChild(email);
form.appendChild(labelGFemenino)
form.appendChild(gFemenino);
form.appendChild(labelGMasculino)
form.appendChild(gMasculino);
form.appendChild(labelGNBinario);
form.appendChild(gNBinario);
form.appendChild(labelGPNodecirlo);
form.appendChild(gPNodecirlo);


form.appendChild(edad);
form.appendChild(tipoUsuario);


//boton para imprimir

let bImprimir = document.createElement("a")
bImprimir.type = "submit"
bImprimir.textContent = "imprimir";
form.appendChild(bImprimir);
bImprimir.setAttribute("onclick", "imprimir()")

function imprimir() {
    console.log("Datos ingresados por el usuario: ***********")
    console.log("Nombre: " + usuario.value)
    console.log("Coreo: " + email.value)

    console.log("********************************************")
};
//////////////////////////////////////////////////////////////////////////////