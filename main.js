
//Importe de funcion personalizada modularizada.
import { saveNodeHfc, onGetNodes} from "./data/firebase.js"; 




//Seleccion de Formulario y guardado de estado en una constante.
const nodeForm = document.getElementById('node-form');
//Seleccion de nodos y guardado de estado en una constante
const nodeContainer = document.getElementById('ndoe-container');


//Funcion que permite que cada vez que se recargue la pagina se recargue el contenido del DOM.
window.addEventListener('DOMContentLoaded',  async () => {
    //Esta linea es un querySnapshot(onSnapshot) que nos trae los datos que existen en ese momento,  es una funcion asincrona pues es una base de datos en tiempo real 
    
    onGetNodes((nodes) => {
        let html = '';
        //Recorremos los datos
        nodes.forEach(doc => {
            //Doc nos trae segmennada la propiedad(data)
            //doc.data transforma el resultado en un objeto de js y no uno de firebase
            const node = doc.data();
            html += `
            
            <div class="card-body mt-3  col-md-6 border border-primary">
                <h3 class="h5">${node.node}</h3>
                    <p>${node.description}</p>
                <div>
                    <button class="bt btn-outline-danger">Delete</button>
                    <button class="btn-warning">Edit</button>
                </div>
            </div>
            `
        });
        nodeContainer.innerHTML = html;
    });


});


//Escucha del evento(Submit) y funcion asincrona que llama a fireStore para guardar datos.
nodeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submited');

    //Seleccion de imput's
    const nodeInicio = nodeForm['node-inicio'];
    const sintoma = nodeForm['node-sintoma'];
    const direction = nodeForm['node-direction'];
    const mac = nodeForm['node-mac'];
    const pruebas = nodeForm['node-pruebas'];
    const numeroClientes = nodeForm['node-numero-clientes'];
    const numeroServicio = nodeForm['node-service-number'];
    const numeroFalla = nodeForm['node-falla'];


    //Metodo personalizado de guardado y reset del formulario.
    saveNodeHfc(nodeInicio.value, sintoma.value, direction.value, mac.value, pruebas.value, numeroClientes.value, numeroServicio.value, numeroFalla.value);
    nodeForm.reset();
});

