let tareas = ['cocinar', 'barrer']
let input = prompt('Hola, ¿Qué quieres hacer?');




while(input != 'salir'){
    if(input == 'listar'){
        listar(tareas);
        break;
    }

}



function listar(array){
    array.forEach(element => {
        console.log('Elemento: ' + element);
    });
}

