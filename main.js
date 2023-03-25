
//Importe de funcion personalizada modularizada.
import {  onGetNodes, deleteMasiivo, editMasiivo } from "./data/firebase.js";


//Seleccion de nodos y guardado de estado en una constante
const nodeContainer = document.getElementById('ndoe-container');


//Funcion que permite que cada vez que se recargue la pagina se recargue el contenido del DOM.
window.addEventListener('DOMContentLoaded',  async () => {
    //Esta linea es un querySnapshot(onSnapshot) que nos trae los datos que existen en ese momento,  es una funcion asincrona pues es una base de datos en tiempo real 
    //Changes of new commit
    onGetNodes((nodes) => {
        let html = '';
        //Recorremos los datos
        nodes.forEach(doc => {
            //Doc nos trae segmennada la propiedad(data)
            //doc.data transforma el resultado en un objeto de js y no uno de firebase
            const node = doc.data();
            html += `
            <div class="accordion" id="${node.falla}">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="${node.mac}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${node.mac}" aria-expanded="true" aria-controls="collapseOne">
                        <strong>${node.nombre}</strong>
                        </button>
                    </h2>
                    <div id="collapse${node.mac}" class="accordion-collapse collapse" aria-labelledby="${node.mac}" data-bs-parent="#${node.falla}">
                        <div class="accordion-body">
                                <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col"><h3 class="h5">${node.nombre}</h3></th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Sintoma: </th>
                                        <td>${node.sintoma}</td>
                                    </tr>
                                        <th scope="row">Posible Inicio: </th>
                                        <td>${node.inicio}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Direccion: </th>
                                        <td>${node.direction}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mac Adress: </th>
                                        <td>${node.mac}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pruebas: </th>
                                        <td>${node.pruebas}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Clientes: </th>
                                        <td>${node.clientes}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Servicio: </th>
                                        <td>${node.servicio}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">N° Falla: </th>
                                        <td>${node.falla}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="container">
                                <button class="btn-delete bt btn-outline-danger" data-id="${doc.id}">Delete</button>
                                <button class="btn-edit btn-warning" data-id="${doc.id}">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>    
            `
        });

        nodeContainer.innerHTML = html;
        //seleccion de interface y datos de todos los botones delete, el boton en si mismo
        const btnsDelete = nodeContainer.querySelectorAll('.btn-delete');
        //Recorremos todos los botones y agregamos un evento click en cada uno de ellos
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', ({target: {dataset}}) => {
                //Pasamos a Firebase el id que captamos en el momento de dar click
                deleteMasiivo(dataset.id);
            })
        });

        const btnsEdit = nodeContainer.querySelectorAll('.btn-edit');
        //Recorremos todos los botones y agregamos un evento click en cada uno de ellos
        btnsEdit.forEach((btn) => {
            btn.addEventListener('click', async ({target: {dataset}}) => {
                //Pasamos a Firebase el id que captamos en el momento de dar click
                const doc = await editMasiivo(dataset.id)
                console.log(doc.data())
            })
        });
        
    });
});