
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"

//Devuelve un objeto DB que es la conexion a la base de datos de masivos HFC.
const db = getFirestore()


//Seleccion de Formulario y guardado de estado en una constante.
const nodeForm = document.getElementById('node-form');

//Escucha del evento(Submit) y funcion asincrona que llama a fireStore para guardar datos.
nodeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submited');

    //Seleccion de imput's
    const nombre = nodeForm['node-id']
    const inicio = nodeForm['node-inicio'];
    const sintoma = nodeForm['node-sintoma'];
    const direction = nodeForm['node-direction'];
    const mac = nodeForm['node-mac'];
    const pruebas = nodeForm['node-pruebas'];
    const clientes = nodeForm['node-numero-clientes'];
    const servicio = nodeForm['node-service-number'];
    const falla = nodeForm['node-falla'];


    //Metodo personalizado de guardado y reset del formulario.
    saveNodeHfc(nombre.value, inicio.value, sintoma.value, direction.value, mac.value, pruebas.value, clientes.value, servicio.value, falla.value);
    nodeForm.reset();
});



//Funcion que Guarda los datos  relacionados a posibles masivos en Hfc en la base de datos.
const saveNodeHfc= (nombre, inicio, sintoma, direction, mac, pruebas, clientes, servicio, falla ) => {
    addDoc(collection(db, 'nodes-hfc'), {nombre: nombre, inicio: inicio, sintoma: sintoma, direction: direction, mac: mac, pruebas: pruebas, clientes: clientes, servicio: servicio, falla: falla});
}


