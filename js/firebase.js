import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB21JccSapnnI8cA3Uxdyu3UxaKSZX4O3k",
authDomain: "so-lab-challenge.firebaseapp.com",
databaseURL: "https://so-lab-challenge-default-rtdb.firebaseio.com",
projectId: "so-lab-challenge"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function guardarResultado(nombre, grupo, puntaje){
  push(ref(db, 'resultados'), {
    nombre,
    grupo,
    puntaje,
    fecha: new Date().toLocaleString()
  });
}