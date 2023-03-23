
//Importe de funcion personalizada modularizada.
import {  onGetNodes } from "./data/firebase.js";

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
            <div class="card-body mt-3 mb-5  col-md-6 border border-primary">
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>${node.nombre}</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                                <button class="bt btn-outline-danger">Delete</button>
                                <button class="btn-warning">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
            `
        });
        nodeContainer.innerHTML = html;
    });

});


