/* *********************************************************
                    CREAR MI PRIMER OBJETO
************************************************************

    let nave = {
        tipoDeNave: "Espacial",
        pais: "argentina",
        cantidadDeTripulantes: 4,
        tripulantes: ['a','b','c','d'],
        estado: 'Usada',
        despegar: ()=>{
            console.log("arrancoooooooo");
            alert("BOOOM");
        }
    }

    console.log(nave.pais);
    console.log(nave.tipoDeNave);
/////////////////////////////////////////////////////////////

/* *********************************************************
                    CREAR MI PRIMER OBJETO
************************************************************

let autos = [
    {
        marca: "Citroen",
        modelo: "C3",
        año: 2013,
        dueño: "Juan",
        color:{
            capot: "gris",
            puertas: "negro"
        },
        dueñosAnteriores: [] // Lo compro 0KM
    },
    {
        marca: "Honda",
        modelo: "Fit",
        año: 2016,
        dueño: "Santiago",
        color:{
            capot: "rojo",
            puertas: "rojo"
        },
        dueñosAnteriores: ["Jorge", "Iván"]
    }
]

autos[0].dueño = "Santiago";
autos[0].dueñosAnteriores.push("Juan");
autos[0].color.capot = "negro";
console.log(autos);


/////////////////////////////////////////////////////////////


/* *********************************************************
                    VARIABLE MI AUTO
************************************************************/
let miAuto={};
let propertyKey ="modelo"
let anotherPropertyKey = "precio"
let nextPropertyKey = "color"

miAuto.marca = "Fiat";
miAuto.año = 2019;
miAuto.nuevo = false;
miAuto[propertyKey] = "600";
miAuto[anotherPropertyKey] = 10000;
miAuto[nextPropertyKey] = "Negro";


console.log(miAuto);

for(let key in miAuto){
    console.log(`${key} : ${miAuto[key]}`);
}

/////////////////////////////////////////////////////////////