
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"

//Devuelve un objeto DB que es la conexion a la base de datos de masivos HFC.
const dbHfc = getFirestore()

//Funcion que Guarda los datos  relacionados a posibles masivos en Hfc en la base de datos.
export const saveNodeHfc= (nodeInicio, sintoma, direction, mac, pruebas, numeroClientes, numeroServicio, numeroFalla ) => {
    addDoc(collection(dbHfc, 'nodes-hfc'), {nodeInicio: nodeInicio, sintoma: sintoma, direction: direction, mac: mac, pruebas: pruebas, numeroClientes: numeroClientes, numeroServicio: numeroServicio, numeroFalla: numeroFalla});
}