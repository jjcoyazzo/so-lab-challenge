window.banco = [

/* =========================
ACTIVIDAD 1: TOP (ANÁLISIS)
========================= */

{
pregunta:"Al observar 'top', el valor 'up 2:35' aparece en la parte superior. ¿Cuál interpretación es la más correcta?",
opciones:[
"Indica el tiempo total que el sistema ha permanecido encendido sin reiniciarse",
"Representa el tiempo de ejecución del proceso con mayor consumo de CPU",
"Es el tiempo que lleva abierta la terminal actual",
"Corresponde al tiempo de respuesta promedio del sistema"
],
correcta:0
},

{
pregunta:"El campo 'load average: 0.50, 0.70, 0.90' muestra tres valores. ¿Cuál es la interpretación más adecuada?",
opciones:[
"Refleja la carga del sistema en intervalos de 1, 5 y 15 minutos respectivamente",
"Indica el uso de CPU, memoria y disco en ese orden",
"Representa el número de usuarios conectados en distintos momentos",
"Corresponde al promedio de procesos finalizados recientemente"
],
correcta:0
},

{
pregunta:"Si un proceso tiene un valor alto en %CPU pero bajo en %MEM, ¿qué se puede inferir?",
opciones:[
"El proceso está utilizando intensivamente el procesador pero no requiere gran cantidad de memoria",
"El proceso está almacenando información en disco en lugar de memoria",
"El proceso está en estado inactivo y no afecta el rendimiento",
"El proceso utiliza exclusivamente recursos de red"
],
correcta:0
},

{
pregunta:"En la columna 'S' aparece la letra 'S'. ¿Cuál es la mejor interpretación de este estado?",
opciones:[
"El proceso está en espera (sleep), listo para ejecutarse cuando sea necesario",
"El proceso está detenido permanentemente y no puede continuar",
"El proceso está consumiendo el máximo de CPU",
"El proceso ha sido eliminado del sistema"
],
correcta:0
},

{
pregunta:"Si el 'load average' es mayor que el número de núcleos del CPU, ¿qué implica?",
opciones:[
"El sistema tiene más procesos esperando ejecutarse que capacidad disponible",
"El sistema está funcionando de manera óptima",
"El uso de memoria es excesivo pero el CPU está libre",
"El disco duro está lleno y limita el rendimiento"
],
correcta:0
},

{
pregunta:"Un valor alto en TIME+ indica que:",
opciones:[
"El proceso ha acumulado mucho tiempo utilizando CPU desde que inició",
"El proceso lleva mucho tiempo en estado de reposo",
"El proceso ha sido ejecutado múltiples veces por el usuario",
"El sistema tiene problemas de sincronización"
],
correcta:0
},

{
pregunta:"Si un proceso tiene alto valor en VIRT pero bajo en RES, ¿qué significa?",
opciones:[
"El proceso reserva memoria virtual, pero no toda está en uso en la RAM",
"El proceso está usando toda la memoria física disponible",
"El proceso está completamente almacenado en disco",
"El proceso no utiliza memoria"
],
correcta:0
},

{
pregunta:"Si varios procesos aparecen con consumo bajo pero el sistema sigue lento, ¿qué se puede concluir?",
opciones:[
"Puede existir una carga acumulada que no es evidente en un solo proceso",
"El sistema está funcionando correctamente",
"El CPU no está siendo utilizado",
"El problema es exclusivamente de red"
],
correcta:0
},

{
pregunta:"La columna NI (nice value) afecta directamente a:",
opciones:[
"La prioridad con la que un proceso es atendido por el sistema",
"El consumo de memoria RAM",
"El uso del disco duro",
"La cantidad de usuarios conectados"
],
correcta:0
},

{
pregunta:"Si un proceso tiene PR bajo y NI negativo, esto indica que:",
opciones:[
"Tiene mayor prioridad frente a otros procesos",
"Está en estado de reposo",
"No puede ejecutarse",
"Está usando demasiada memoria"
],
correcta:0
},

/* =========================
ACTIVIDAD 2: MEMORIA
========================= */

{
pregunta:"En el comando free -m, si 'free' es bajo pero 'available' es alto, ¿qué significa realmente?",
opciones:[
"El sistema tiene memoria disponible gracias a la liberación de caché cuando sea necesario",
"El sistema está completamente saturado de memoria",
"No hay memoria disponible para nuevas aplicaciones",
"La RAM está dañada"
],
correcta:0
},

{
pregunta:"El valor 'buff/cache' representa:",
opciones:[
"Memoria utilizada temporalmente para mejorar el rendimiento del sistema",
"Memoria dañada que no puede ser utilizada",
"Memoria exclusiva del kernel que no se libera",
"Espacio reservado para la red"
],
correcta:0
},

{
pregunta:"Si la memoria 'used' es alta, ¿siempre es un problema?",
opciones:[
"No necesariamente, ya que puede incluir memoria utilizada como caché",
"Sí, siempre indica fallo del sistema",
"No, porque no tiene impacto en el rendimiento",
"Sí, porque significa que el CPU está saturado"
],
correcta:0
},

{
pregunta:"¿Cuál sería una acción adecuada si la memoria realmente está saturada?",
opciones:[
"Cerrar procesos innecesarios o agregar más memoria",
"Reiniciar el sistema constantemente",
"Borrar archivos del disco duro",
"Desconectar la red"
],
correcta:0
},

{
pregunta:"El valor 'shared' indica:",
opciones:[
"Memoria que es utilizada por múltiples procesos simultáneamente",
"Memoria exclusiva de un solo proceso",
"Memoria del sistema operativo únicamente",
"Memoria del disco duro"
],
correcta:0
},

/* =========================
ACTIVIDAD 3: DISCO
========================= */

{
pregunta:"El comando df -h utiliza la opción -h para:",
opciones:[
"Mostrar los tamaños en formato legible (KB, MB, GB)",
"Ocultar archivos del sistema",
"Optimizar el uso del disco",
"Reducir el consumo de CPU"
],
correcta:0
},

{
pregunta:"Si una partición tiene Use% cercano a 100%, ¿qué riesgo existe?",
opciones:[
"El sistema puede fallar al guardar nuevos datos",
"El CPU dejará de funcionar",
"La memoria RAM se borrará",
"La red se desconectará"
],
correcta:0
},

{
pregunta:"El campo 'Mounted on' indica:",
opciones:[
"La ubicación donde está accesible la partición dentro del sistema",
"El tamaño total del disco",
"El uso del CPU",
"El estado de la memoria"
],
correcta:0
},

{
pregunta:"Si la partición raíz (/) está llena, ¿qué impacto tiene?",
opciones:[
"Puede afectar el funcionamiento general del sistema operativo",
"No tiene impacto",
"Solo afecta a la red",
"Solo afecta al CPU"
],
correcta:0
},

/* =========================
ACTIVIDAD 4: INTEGRADOR
========================= */

{
pregunta:"Si CPU, RAM y disco presentan valores altos simultáneamente, ¿qué indica?",
opciones:[
"El sistema está saturado y su rendimiento se ve afectado",
"El sistema está funcionando correctamente",
"Solo hay un problema de red",
"No hay ningún problema"
],
correcta:0
},

{
pregunta:"Como administrador, ante un sistema lento, la mejor acción sería:",
opciones:[
"Analizar procesos y liberar recursos innecesarios",
"Apagar el equipo sin revisar",
"Ignorar el problema",
"Eliminar todos los archivos"
],
correcta:0
},

{
pregunta:"El análisis del desempeño del sistema implica:",
opciones:[
"Interpretar datos para tomar decisiones",
"Memorizar comandos",
"Ejecutar sin analizar",
"Copiar resultados"
],
correcta:0
},

{
pregunta:"Si el sistema responde lento pero los valores parecen normales, ¿qué se puede inferir?",
opciones:[
"Puede existir un problema no evidente o externo",
"El sistema está perfecto",
"El CPU está apagado",
"La memoria no existe"
],
correcta:0
}

/* =========================
CONTINUACIÓN HASTA 50
========================= */

{
pregunta:"Si el valor de 'load average' aumenta progresivamente, ¿qué indica?",
opciones:[
"El sistema está acumulando procesos en espera de CPU",
"El sistema está liberando memoria constantemente",
"El disco duro está vacío",
"La red está saturada"
],
correcta:0
},

{
pregunta:"Un proceso en estado 'R' significa que:",
opciones:[
"Está en ejecución o listo para ejecutarse",
"Está detenido permanentemente",
"Está en espera de entrada del usuario",
"Está almacenado en disco"
],
correcta:0
},

{
pregunta:"Si un proceso tiene alto %MEM, ¿qué implica?",
opciones:[
"Está consumiendo una gran cantidad de memoria RAM",
"Está usando más CPU que memoria",
"No está activo",
"Está en segundo plano sin impacto"
],
correcta:0
},

{
pregunta:"El valor RES representa:",
opciones:[
"La memoria física realmente utilizada por el proceso",
"La memoria total del sistema",
"La memoria virtual disponible",
"La memoria del disco"
],
correcta:0
},

{
pregunta:"Si el sistema tiene muchos procesos en estado 'S', significa que:",
opciones:[
"Muchos procesos están en espera de algún evento",
"El sistema está bloqueado",
"No hay procesos activos",
"Todos los procesos están finalizados"
],
correcta:0
},

{
pregunta:"¿Qué sucede si se incrementa el valor NI de un proceso?",
opciones:[
"Disminuye su prioridad",
"Aumenta su uso de CPU",
"Aumenta su uso de memoria",
"Se detiene automáticamente"
],
correcta:0
},

{
pregunta:"Si el CPU está al 100% pero el load average es bajo, ¿qué podría indicar?",
opciones:[
"Un proceso está usando intensivamente el CPU pero no hay cola de espera",
"El sistema está saturado completamente",
"No hay procesos activos",
"El sistema está apagado"
],
correcta:0
},

{
pregunta:"El comando top se utiliza principalmente para:",
opciones:[
"Monitorear procesos en tiempo real",
"Eliminar archivos",
"Configurar red",
"Instalar software"
],
correcta:0
},

{
pregunta:"Si un proceso tiene TIME+ alto pero %CPU bajo actualmente:",
opciones:[
"Usó CPU intensivamente en el pasado",
"Está usando CPU en este momento",
"No ha sido ejecutado",
"Está bloqueado permanentemente"
],
correcta:0
},

{
pregunta:"El valor VIRT incluye:",
opciones:[
"Memoria total reservada (RAM + swap + librerías)",
"Solo memoria RAM",
"Solo memoria caché",
"Solo memoria compartida"
],
correcta:0
},

{
pregunta:"Si el swap comienza a usarse constantemente:",
opciones:[
"Puede indicar falta de RAM",
"El sistema está optimizado",
"El CPU está libre",
"No hay procesos activos"
],
correcta:0
},

{
pregunta:"El uso excesivo de swap provoca:",
opciones:[
"Disminución del rendimiento",
"Aumento del rendimiento",
"Mejor uso de CPU",
"Ningún efecto"
],
correcta:0
},

{
pregunta:"El comando free muestra:",
opciones:[
"Estado de la memoria RAM",
"Estado del CPU",
"Estado de la red",
"Estado del disco"
],
correcta:0
},

{
pregunta:"Si 'available' es bajo en free, significa:",
opciones:[
"Poca memoria disponible para nuevos procesos",
"El CPU está saturado",
"El disco está lleno",
"No hay usuarios"
],
correcta:0
},

{
pregunta:"La memoria caché sirve para:",
opciones:[
"Acelerar el acceso a datos",
"Reducir el uso del CPU",
"Eliminar procesos",
"Apagar el sistema"
],
correcta:0
},

{
pregunta:"El comando df permite:",
opciones:[
"Ver el uso del disco",
"Ver procesos",
"Ver memoria",
"Ver CPU"
],
correcta:0
},

{
pregunta:"Si el disco está lleno, puede causar:",
opciones:[
"Errores al guardar archivos",
"Aumento de CPU",
"Mejor rendimiento",
"Más memoria disponible"
],
correcta:0
},

{
pregunta:"El sistema operativo administra recursos como:",
opciones:[
"CPU, memoria y disco",
"Solo CPU",
"Solo memoria",
"Solo red"
],
correcta:0
},

{
pregunta:"El rendimiento del sistema depende de:",
opciones:[
"La gestión eficiente de recursos",
"El color de la interfaz",
"La marca del teclado",
"El tipo de monitor"
],
correcta:0
},

{
pregunta:"Monitorear el sistema permite:",
opciones:[
"Detectar problemas y tomar decisiones",
"Eliminar el sistema operativo",
"Reducir la memoria física",
"Desactivar procesos automáticamente"
],
correcta:0
},

{
pregunta:"Un sistema lento puede deberse a:",
opciones:[
"Falta de recursos o mala gestión",
"Demasiada memoria libre",
"Pocos procesos",
"CPU inactivo"
],
correcta:0
},

{
pregunta:"Si el CPU está inactivo pero el sistema lento:",
opciones:[
"Puede haber cuello de botella en otro recurso",
"Todo funciona bien",
"No hay procesos",
"El sistema está apagado"
],
correcta:0
},

{
pregunta:"El análisis de desempeño implica:",
opciones:[
"Interpretar múltiples métricas",
"Ver solo CPU",
"Revisar solo memoria",
"Ignorar datos"
],
correcta:0
},

{
pregunta:"Una buena práctica es:",
opciones:[
"Monitorear constantemente el sistema",
"Ignorar alertas",
"Apagar sin revisar",
"Eliminar procesos al azar"
],
correcta:0
},

{
pregunta:"El kernel es responsable de:",
opciones:[
"Gestionar recursos del sistema",
"Mostrar gráficos",
"Navegar en internet",
"Editar documentos"
],
correcta:0
},

{
pregunta:"Un proceso zombie es:",
opciones:[
"Un proceso finalizado pero no liberado",
"Un proceso activo",
"Un proceso en ejecución",
"Un proceso detenido"
],
correcta:0
}

];

