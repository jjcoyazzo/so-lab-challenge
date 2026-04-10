// ============================
// BANCO DE 60 PREGUNTAS CON TEMAS
// ============================

let banco = [

{tema:"CPU", pregunta:"¿Cuál es la función principal del comando 'top' en sistemas Linux?", opciones:["Monitorear en tiempo real los procesos del sistema","Editar archivos de texto","Compilar programas","Administrar la red"], correcta:0},
{tema:"CPU", pregunta:"En el comando top, ¿qué indica el valor 'up time'?", opciones:["El tiempo que el sistema ha estado encendido sin reiniciarse","El uso de CPU","La memoria disponible","La velocidad de red"], correcta:0},
{tema:"CPU", pregunta:"En top, ¿qué representa el campo 'users'?", opciones:["La cantidad de usuarios actualmente conectados al sistema","El uso de CPU","La memoria RAM usada","El número de procesos activos"], correcta:0},
{tema:"CPU", pregunta:"¿Qué es el 'load average' mostrado en top?", opciones:["El promedio de carga del sistema en cierto tiempo","La memoria RAM usada","El espacio en disco","La velocidad de red"], correcta:0},
{tema:"CPU", pregunta:"¿Por qué el 'load average' muestra tres valores?", opciones:["Porque representa la carga en 1, 5 y 15 minutos","Porque indica CPU, RAM y disco","Porque mide usuarios","Porque muestra procesos"], correcta:0},

{tema:"Procesos", pregunta:"¿Qué significa PID en la gestión de procesos?", opciones:["Identificador único de cada proceso en el sistema","Cantidad de memoria usada","Nivel de CPU","Nombre del usuario"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué indica la columna USER en top?", opciones:["El usuario propietario del proceso","El uso de CPU","La memoria utilizada","El disco usado"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué representa PR en un proceso?", opciones:["La prioridad del proceso en el sistema","La memoria asignada","El uso de CPU","El estado de red"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué significa NI (nice value)?", opciones:["El ajuste de prioridad de un proceso","El uso de CPU","La memoria libre","El estado del disco"], correcta:0},

{tema:"Memoria", pregunta:"¿Qué representa la memoria VIRT en top?", opciones:["La memoria virtual total utilizada por el proceso","La memoria RAM física","El espacio en disco","La memoria caché"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué indica RES?", opciones:["La cantidad de memoria RAM física usada por el proceso","El uso de CPU","El disco usado","La red"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué significa SHR?", opciones:["La memoria compartida con otros procesos","Uso de CPU","Uso de red","Uso de disco"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué significa el estado 'S' en un proceso?", opciones:["El proceso está en estado de reposo (sleeping)","Está ejecutándose","Está detenido","Es zombie"], correcta:0},

{tema:"CPU", pregunta:"¿Qué mide el porcentaje %CPU?", opciones:["El porcentaje de uso del procesador por el proceso","El uso de memoria","El uso de disco","El uso de red"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué mide %MEM?", opciones:["El porcentaje de memoria RAM utilizada por el proceso","El uso de CPU","El uso de disco","El uso de red"], correcta:0},
{tema:"CPU", pregunta:"¿Qué indica TIME+?", opciones:["El tiempo total de CPU utilizado por el proceso","El tiempo real","El uso de disco","La red"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué representa COMMAND?", opciones:["El nombre del programa o comando del proceso","El uso de CPU","El usuario","La memoria"], correcta:0},

{tema:"CPU", pregunta:"Si un proceso tiene alto consumo de CPU, ¿qué significa?", opciones:["Está utilizando intensivamente el procesador","No tiene actividad","Hay error","Solo usa red"], correcta:0},
{tema:"Memoria", pregunta:"Si un proceso consume mucha memoria, ¿qué indica?", opciones:["Está usando gran cantidad de RAM","Está usando CPU","Usa red","Usa disco"], correcta:0},
{tema:"CPU", pregunta:"Si la CPU está al 100%, ¿qué ocurre?", opciones:["El sistema puede volverse lento o saturado","El sistema mejora","No pasa nada","Solo afecta RAM"], correcta:0},

{tema:"Memoria", pregunta:"¿Qué muestra el comando free -m?", opciones:["El estado de la memoria RAM en megabytes","El uso de CPU","El uso del disco","La red"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué significa 'total' en free?", opciones:["La cantidad total de memoria RAM instalada","La memoria libre","La caché","El swap"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué indica 'used'?", opciones:["La memoria RAM que está siendo utilizada","La memoria libre","El CPU","El disco"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué significa 'free'?", opciones:["La memoria RAM completamente libre","El CPU","El disco","La red"], correcta:0},

{tema:"Memoria", pregunta:"¿Qué representa 'available' en memoria?", opciones:["La memoria disponible para nuevas aplicaciones","El CPU","El disco","La red"], correcta:0},
{tema:"Memoria", pregunta:"¿Por qué no es grave que la memoria 'free' sea baja?", opciones:["Porque el sistema usa memoria como caché para optimizar rendimiento","Porque hay error","Por virus","Por falla"], correcta:0},

{tema:"Disco", pregunta:"¿Qué muestra el comando df -h?", opciones:["El uso del espacio en disco de forma legible","El CPU","La memoria","La red"], correcta:0},
{tema:"Disco", pregunta:"¿Qué es 'Filesystem'?", opciones:["El sistema de archivos de la partición","El CPU","La RAM","La red"], correcta:0},
{tema:"Disco", pregunta:"¿Qué indica 'Size'?", opciones:["El tamaño total de la partición","El CPU","La RAM","La red"], correcta:0},
{tema:"Disco", pregunta:"¿Qué significa 'Used'?", opciones:["El espacio de disco utilizado","El libre","CPU","RAM"], correcta:0},
{tema:"Disco", pregunta:"¿Qué indica 'Avail'?", opciones:["El espacio disponible en disco","CPU","RAM","Red"], correcta:0},

{tema:"Disco", pregunta:"¿Qué representa 'Use%'?", opciones:["El porcentaje de uso del disco","CPU","RAM","Red"], correcta:0},
{tema:"Disco", pregunta:"¿Qué significa 'Mounted on'?", opciones:["El punto donde está montada la partición","CPU","RAM","Red"], correcta:0},
{tema:"Disco", pregunta:"Si un disco está al 100%, ¿qué problema puede ocurrir?", opciones:["El sistema puede fallar o no guardar archivos","Mejora rendimiento","No pasa nada","Afecta RAM"], correcta:0},

{tema:"CPU", pregunta:"¿Qué indica un sistema saturado?", opciones:["Altos niveles de CPU, RAM y disco simultáneamente","Funcionamiento normal","Error leve","Sistema óptimo"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué debe hacer un administrador ante saturación?", opciones:["Analizar procesos y liberar recursos","Ignorar","Apagar todo","Eliminar archivos"], correcta:0},

{tema:"CPU", pregunta:"¿Qué indica un load average alto?", opciones:["El sistema tiene muchos procesos en ejecución","El sistema está libre","No hay procesos","La RAM está vacía"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué es un proceso zombie?", opciones:["Un proceso terminado que no ha sido liberado del sistema","Un proceso activo","Un proceso con alto CPU","Un proceso con mucha RAM"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué implica un valor PR bajo?", opciones:["Mayor prioridad del proceso","Menor prioridad","Mayor uso de CPU","Mayor uso de RAM"], correcta:0},
{tema:"Procesos", pregunta:"¿Qué implica un valor NI alto?", opciones:["Menor prioridad del proceso","Mayor prioridad","Mayor CPU","Mayor RAM"], correcta:0},

{tema:"Memoria", pregunta:"Si RES es alto, ¿qué significa?", opciones:["El proceso usa mucha memoria RAM","Usa CPU","Usa red","Usa disco"], correcta:0},
{tema:"Memoria", pregunta:"Si SHR es alto, ¿qué indica?", opciones:["El proceso comparte mucha memoria con otros","Usa CPU","Usa red","Usa disco"], correcta:0},
{tema:"CPU", pregunta:"Si TIME+ es alto, ¿qué indica?", opciones:["El proceso ha usado CPU por mucho tiempo","Usa RAM","Usa disco","Usa red"], correcta:0},

{tema:"Memoria", pregunta:"Si available es alto, ¿qué significa?", opciones:["El sistema tiene memoria disponible suficiente","Está saturado","Hay error","Hay falla"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué significa buff/cache?", opciones:["Memoria utilizada como caché para mejorar rendimiento","Uso de CPU","Uso de red","Uso de disco"], correcta:0},

{tema:"Disco", pregunta:"¿Qué información muestra df?", opciones:["Las particiones y uso de disco","CPU","RAM","Red"], correcta:0},
{tema:"Disco", pregunta:"¿Qué es ext4?", opciones:["Un sistema de archivos común en Linux","Un CPU","Una memoria","Una red"], correcta:0},
{tema:"Disco", pregunta:"Si Use% es alto, ¿qué significa?", opciones:["El disco está casi lleno","Está vacío","CPU alta","RAM alta"], correcta:0},

{tema:"Disco", pregunta:"¿Qué significa que una partición esté montada en '/'?", opciones:["Es la raíz del sistema","Es la red","Es la RAM","Es la CPU"], correcta:0},
{tema:"CPU", pregunta:"¿Qué afecta una alta carga del sistema?", opciones:["El rendimiento general","Nada","CPU baja","RAM libre"], correcta:0},

{tema:"Procesos", pregunta:"¿Qué debe hacer un administrador del sistema?", opciones:["Optimizar recursos y monitorear procesos","Ignorar problemas","Apagar el sistema","Eliminar archivos sin análisis"], correcta:0},
{tema:"CPU", pregunta:"¿Qué ocurre cuando la CPU está saturada?", opciones:["El sistema se vuelve lento","El sistema mejora","No pasa nada","Solo afecta RAM"], correcta:0},
{tema:"Memoria", pregunta:"¿Qué ocurre cuando la RAM está saturada?", opciones:["El sistema puede usar memoria swap","No pasa nada","Solo CPU","Solo red"], correcta:0},
{tema:"Disco", pregunta:"¿Qué ocurre cuando el disco está saturado?", opciones:["Pueden ocurrir errores al guardar información","No pasa nada","Solo CPU","Solo RAM"], correcta:0}

];

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
// LÓGICA
// ============================

let actual=0, correctas=0, respondida=false;

function cargar(){
    respondida=false;

    let p = preguntas[actual];

    let temaElemento = document.getElementById("tema");
    if(temaElemento){
        temaElemento.innerText = "Tema: " + p.tema;
    }

    pregunta.innerText=p.pregunta;
    contador.innerText=`Pregunta ${actual+1} de ${preguntas.length}`;

    barra.style.width=((actual)/preguntas.length)*100+"%";

    opciones.innerHTML="";

    p.opciones.forEach((op,i)=>{
        opciones.innerHTML+=`<button onclick="responder(this,${i})">${op}</button>`;
    });
}

function responder(btn,i){
    if(respondida) return;
    respondida=true;

    let p = preguntas[actual];
    let botones = document.querySelectorAll("#opciones button");

    botones.forEach((b,index)=>{
        if(index===p.correcta) b.classList.add("correct");
        else if(index===i) b.classList.add("incorrect");
    });

    if(i===p.correcta) correctas++;
}

function siguiente(){
    actual++;

    if(actual<preguntas.length){
        cargar();
    }else{
        let puntaje = Math.round((correctas/preguntas.length)*100);

        let nombre = localStorage.getItem("nombre") || "Sin nombre";
        let grupo = localStorage.getItem("grupo") || "Sin grupo";

        let resultado = {
            nombre: nombre,
            grupo: grupo,
            puntaje: puntaje,
            estado: puntaje >= 90 ? "Aprobado" : "Reprobado",
            fecha: new Date().toLocaleString()
        };

        let lista = JSON.parse(localStorage.getItem("resultados")) || [];

        lista.push(resultado);

        localStorage.setItem("resultados", JSON.stringify(lista));

        // ✅ MENSAJE AL ALUMNO
        if(puntaje >= 90){
            alert("✅ Evaluación aprobada. Resultado guardado correctamente.");
        }else{
            alert("❌ No alcanzaste el 90%. Debes repetir la evaluación.");
        }

        // ✅ REGRESA AL INICIO
        location.href="index.html";
    }
}

window.onload=cargar;