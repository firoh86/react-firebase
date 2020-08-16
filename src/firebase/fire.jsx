// npm install --save firebas
// para cargat el sdk de firebase y sus modulos

// Importamos firebase
import * as firebase from 'firebase/app';
// Importamos las herramientas de acceso a los modulos de firebase
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// Creamos el API KEY e inicializamos la aplicacion
const app = firebase.initializeApp({
 'API_KEY',
});
export default app;



/* 
En los diferentes componentes ahora podemos llamar a los diferentes módulos de firebase para usar sus métodos con:
import app from '../fire';
Para el Auth 
app.auth()
Para el database
app.firestore()
Y para el storage de imagenes
app.storage()
*/