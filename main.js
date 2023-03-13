
//Importe de funcion personalizada modularizada.
import { saveNode } from "./data/firebase.js"; 

//Funcion que permite que cada vez que se recargue la pagina se recargue el contenido del DOM.
window.addEventListener('DOMContentLoaded', () => {
    console.log('Works');
});

//Seleccion de Formulario y guardado de estado en una constante.
const nodeForm = document.getElementById('node-form');

//Escucha del evento(Submit) y funcion asincrona que llama a fireStore para guardar datos.
nodeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submited');

    //Seleccion de imput's
    const node = nodeForm['node-title'];
    const description = nodeForm['node-description'];

    //Metodo personalizado de guardado y reset del formulario.
    saveNode(node.value, description.value);
    nodeForm.reset();
});

