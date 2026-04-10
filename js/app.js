// ============================
// BANCO DE PREGUNTAS
// ============================

let banco = window.banco || []; // por si lo tienes en otro archivo

// ============================
// MEZCLAR
// ============================

function mezclar(array){
    return array.sort(() => Math.random() - 0.5);
}

let preguntas = mezclar([...banco]);

preguntas.forEach(p=>{
    let ops = p.opciones.map((op,i)=>({op,i}));
    ops = mezclar(ops);

    p.opciones = ops.map(o=>o.op);
    p.correcta = ops.findIndex(o=>o.i===p.correcta);
});

// ============================
// VARIABLES
// ============================

let actual = 0;
let correctas = 0;
let respondida = false;

// ============================
// CARGAR PREGUNTA
// ============================

function cargar(){
    respondida = false;

    let p = preguntas[actual];

    let temaElemento = document.getElementById("tema");
    if(temaElemento){
        temaElemento.innerText = "Tema: " + p.tema;
    }

    document.getElementById("pregunta").innerText = p.pregunta;
    document.getElementById("contador").innerText = `Pregunta ${actual+1} de ${preguntas.length}`;

    document.getElementById("barra").style.width = ((actual)/preguntas.length)*100 + "%";

    let opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    p.opciones.forEach((op,i)=>{
        opcionesDiv.innerHTML += `<button onclick="responder(this,${i})">${op}</button>`;
    });
}

// ============================
// RESPONDER
// ============================

function responder(btn,i){
    if(respondida) return;
    respondida = true;

    let p = preguntas[actual];
    let botones = document.querySelectorAll("#opciones button");

    botones.forEach((b,index)=>{
        if(index === p.correcta) b.classList.add("correct");
        else if(index === i) b.classList.add("incorrect");
    });

    if(i === p.correcta) correctas++;
}

// ============================
// SIGUIENTE
// ============================

function siguiente(){
    actual++;

    if(actual < preguntas.length){
        cargar();
    }else{
        finalizar();
    }
}

// ============================
// GUARDAR RESULTADO (CORREGIDO)
// ============================

function guardarResultadoLocal(resultado){

    let lista = [];

    let datosGuardados = localStorage.getItem("resultados");

    if(datosGuardados){
        try{
            lista = JSON.parse(datosGuardados);

            // 🔒 Validar que sea arreglo
            if(!Array.isArray(lista)){
                lista = [];
            }

        }catch(e){
            console.error("Error leyendo localStorage:", e);
            lista = [];
        }
    }

    lista.push(resultado);

    localStorage.setItem("resultados", JSON.stringify(lista));

    console.log("Resultados guardados:", lista);
}

// ============================
// FINALIZAR EXAMEN
// ============================

function finalizar(){

    let puntaje = Math.round((correctas / preguntas.length) * 100);

    let nombre = localStorage.getItem("nombre") || "Sin nombre";
    let grupo = localStorage.getItem("grupo") || "Sin grupo";

    let resultado = {
        nombre: nombre,
        grupo: grupo,
        puntaje: puntaje,
        estado: puntaje >= 90 ? "Aprobado" : "Reprobado",
        fecha: new Date().toLocaleString()
    };

    // ✅ GUARDAR SIN BORRAR LOS ANTERIORES
    guardarResultadoLocal(resultado);

    // ✅ MENSAJE SOLO (como querías)
    if(puntaje >= 90){
        alert("✅ Evaluación aprobada. Resultado guardado correctamente.");
    }else{
        alert("❌ No alcanzaste el 90%. Debes repetir la evaluación.");
    }

    // 🔁 REDIRECCIÓN
    location.href = "index.html";
}

// ============================
// INICIO
// ============================

window.onload = cargar;