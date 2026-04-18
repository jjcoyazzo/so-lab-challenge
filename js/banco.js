    window.banco = [

/* =========================
ANÁLISIS DE RIESGOS
========================= */

{
pregunta:"¿Cuál es la diferencia correcta entre activo, amenaza e impacto?",
opciones:[
"Activo es lo que se protege, amenaza es la causa y el impacto es la consecuencia",
"Activo es el daño, amenaza es la solución e impacto es el proceso",
"Activo es un usuario, amenaza es un comando e impacto es un archivo",
"No existe diferencia entre ellos"
],
correcta:0
},

{
pregunta:"Un estudiante define como amenaza 'pérdida de información'. ¿Qué error comete?",
opciones:[
"Confunde impacto con amenaza",
"Confunde activo con impacto",
"No existe error",
"Confunde sistema con usuario"
],
correcta:0
},

{
pregunta:"¿Por qué el análisis de riesgos debe realizarse antes de configurar un sistema como Ubuntu?",
opciones:[
"Permite identificar qué proteger y definir controles adecuados",
"Reduce automáticamente el uso de CPU",
"Evita la instalación de software",
"Mejora la velocidad de red"
],
correcta:0
},

{
pregunta:"¿Qué describe mejor un activo en un sistema?",
opciones:[
"Cualquier recurso que tiene valor y debe protegerse",
"Un error del sistema",
"Un ataque informático",
"Un comando de terminal"
],
correcta:0
},

{
pregunta:"¿Qué representa una amenaza?",
opciones:[
"Una causa potencial de daño a un activo",
"El resultado de un fallo",
"Un recurso del sistema",
"Una política de seguridad"
],
correcta:0
},

{
pregunta:"¿Qué representa el impacto?",
opciones:[
"La consecuencia de que una amenaza se materialice",
"El origen del problema",
"Un usuario del sistema",
"Un proceso activo"
],
correcta:0
},

{
pregunta:"Si un usuario administrador comparte su contraseña, el nivel de riesgo es:",
opciones:[
"Crítico",
"Bajo",
"Medio",
"Irrelevante"
],
correcta:0
},

{
pregunta:"¿Por qué no todos los riesgos deben clasificarse como altos?",
opciones:[
"Depende de impacto y probabilidad",
"Porque no afectan al sistema",
"Porque son iguales",
"Porque no se analizan"
],
correcta:0
},

{
pregunta:"¿Qué factor es clave para determinar el nivel de riesgo?",
opciones:[
"Impacto y probabilidad",
"Cantidad de usuarios",
"Color del sistema",
"Tipo de hardware"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si no se realiza análisis de riesgos?",
opciones:[
"Se implementan medidas sin criterio",
"El sistema mejora automáticamente",
"No afecta en nada",
"Se optimiza el rendimiento"
],
correcta:0
},

/* =========================
GESTIÓN DE USUARIOS
========================= */

{
pregunta:"¿Qué implica pertenecer al grupo sudo?",
opciones:[
"Tener privilegios administrativos",
"Ser usuario limitado",
"No tener acceso",
"Solo leer archivos"
],
correcta:0
},

{
pregunta:"¿Por qué no todos los usuarios deben ser administradores?",
opciones:[
"Para aplicar el principio de mínimo privilegio",
"Para mejorar velocidad",
"Para reducir memoria",
"Porque no pueden ejecutar comandos"
],
correcta:0
},

{
pregunta:"Si todos los usuarios son administradores, ¿qué riesgo existe?",
opciones:[
"Errores y accesos indebidos",
"Mejor seguridad",
"Mayor rendimiento",
"Ninguno"
],
correcta:0
},

{
pregunta:"¿Qué diferencia hay entre sudo y root?",
opciones:[
"sudo da acceso temporal, root es acceso total permanente",
"No hay diferencia",
"root es más limitado",
"sudo no ejecuta comandos"
],
correcta:0
},

{
pregunta:"¿Qué principio de seguridad se aplica al limitar privilegios?",
opciones:[
"Mínimo privilegio",
"Máximo acceso",
"Acceso libre",
"Control total"
],
correcta:0
},

{
pregunta:"¿Qué podría pasar si un usuario estándar obtiene acceso a sudo?",
opciones:[
"Puede ejecutar comandos administrativos",
"No ocurre nada",
"Pierde acceso",
"Se bloquea el sistema"
],
correcta:0
},

{
pregunta:"¿Por qué es importante verificar grupos de usuario?",
opciones:[
"Para confirmar permisos asignados",
"Para mejorar CPU",
"Para liberar memoria",
"Para borrar archivos"
],
correcta:0
},

/* =========================
PERMISOS
========================= */

{
pregunta:"¿Qué significa chmod 600?",
opciones:[
"Solo el propietario puede leer y escribir",
"Todos tienen acceso",
"Nadie accede",
"Solo root accede"
],
correcta:0
},

{
pregunta:"¿Qué significa chmod 644?",
opciones:[
"Propietario lee/escribe, otros solo leen",
"Todos modifican",
"Nadie lee",
"Solo root accede"
],
correcta:0
},

{
pregunta:"¿Qué riesgo tiene usar permisos 777?",
opciones:[
"Cualquier usuario puede modificar el archivo",
"Mejora la seguridad",
"Reduce CPU",
"No tiene impacto"
],
correcta:0
},

{
pregunta:"¿Qué propiedad protege el control de permisos?",
opciones:[
"Confidencialidad e integridad",
"Velocidad",
"CPU",
"Red"
],
correcta:0
},

{
pregunta:"¿Qué sucede si un archivo confidencial tiene permisos abiertos?",
opciones:[
"Puede ser accedido o modificado por otros usuarios",
"Se vuelve más seguro",
"Reduce memoria",
"No tiene impacto"
],
correcta:0
},

/* =========================
FIREWALL
========================= */

{
pregunta:"¿Qué es un firewall?",
opciones:[
"Sistema que controla tráfico de red",
"Antivirus",
"Editor",
"Gestor de memoria"
],
correcta:0
},

{
pregunta:"¿Qué implica abrir puertos innecesarios?",
opciones:[
"Aumenta superficie de ataque",
"Mejora rendimiento",
"Reduce CPU",
"No tiene efecto"
],
correcta:0
},

{
pregunta:"El puerto 22 corresponde a:",
opciones:[
"SSH",
"HTTP",
"FTP",
"DNS"
],
correcta:0
},

{
pregunta:"¿Por qué abrir solo servicios necesarios?",
opciones:[
"Reduce riesgos",
"Mejora CPU",
"Reduce memoria",
"No importa"
],
correcta:0
},

{
pregunta:"¿Qué puede hacer un atacante con un puerto abierto?",
opciones:[
"Intentar acceder o explotar vulnerabilidades",
"Aumentar rendimiento",
"Reducir memoria",
"Nada"
],
correcta:0
},

/* =========================
CONTRASEÑAS
========================= */

{
pregunta:"¿Qué objetivo tiene una política de contraseñas?",
opciones:[
"Definir reglas para todas las contraseñas de los usuarios",
"Crear una contraseña única para el sistema",
"Eliminar usuarios automáticamente",
"Reducir el uso de CPU"
],
correcta:0
},

{
pregunta:"¿Qué ventaja principal tiene una contraseña larga?",
opciones:[
"Aumenta la resistencia a ataques de fuerza bruta",
"Reduce el uso de memoria",
"Mejora la velocidad del sistema",
"No tiene impacto"
],
correcta:0
},

{
pregunta:"¿Qué tipo de ataque se dificulta con contraseñas largas?",
opciones:[
"Fuerza bruta",
"Phishing",
"Denegación de servicio",
"Intercepción de red"
],
correcta:0
},

{
pregunta:"¿Por qué la complejidad en contraseñas es importante?",
opciones:[
"Evita patrones predecibles",
"Reduce uso de CPU",
"Aumenta memoria",
"No tiene impacto"
],
correcta:0
},

{
pregunta:"¿Qué problema puede generar una política de contraseñas demasiado estricta?",
opciones:[
"Usuarios pueden escribirlas o reutilizarlas",
"Mejora la seguridad total",
"Reduce accesos",
"No afecta nada"
],
correcta:0
},

{
pregunta:"¿Por qué es importante el equilibrio entre seguridad y usabilidad?",
opciones:[
"Para evitar malas prácticas de los usuarios",
"Para mejorar CPU",
"Para reducir disco",
"No tiene importancia"
],
correcta:0
},

{
pregunta:"¿Qué riesgo se reduce al cambiar contraseñas periódicamente?",
opciones:[
"Uso indebido de credenciales comprometidas",
"Consumo de memoria",
"Uso de CPU",
"Fallas de disco"
],
correcta:0
},

{
pregunta:"¿Qué sucede si no se cambian las contraseñas nunca?",
opciones:[
"Mayor riesgo si son comprometidas",
"Mejora el rendimiento",
"No pasa nada",
"Reduce vulnerabilidades"
],
correcta:0
},

{
pregunta:"¿Qué característica mejora la seguridad de una contraseña?",
opciones:[
"Combinación de diferentes tipos de caracteres",
"Solo longitud corta",
"Uso de palabras comunes",
"Repetición de caracteres"
],
correcta:0
},

{
pregunta:"¿Cuál es el objetivo de una política institucional de contraseñas?",
opciones:[
"Estandarizar la seguridad de acceso",
"Reducir usuarios",
"Aumentar velocidad",
"Eliminar procesos"
],
correcta:0
},

/* =========================
MANTENIMIENTO
========================= */

{
pregunta:"¿Qué hace apt update?",
opciones:[
"Actualiza la lista de paquetes disponibles",
"Instala programas",
"Elimina archivos",
"Reinicia el sistema"
],
correcta:0
},

{
pregunta:"¿Qué hace apt upgrade?",
opciones:[
"Instala las actualizaciones disponibles",
"Elimina usuarios",
"Formatea disco",
"Cierra procesos"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si ejecutas update pero no upgrade?",
opciones:[
"Solo se actualiza la lista, no se instalan mejoras",
"El sistema se actualiza completamente",
"Se eliminan paquetes",
"No pasa nada"
],
correcta:0
},

{
pregunta:"¿Para qué sirve apt autoremove?",
opciones:[
"Eliminar paquetes innecesarios",
"Aumentar memoria",
"Reducir CPU",
"Eliminar usuarios"
],
correcta:0
},

{
pregunta:"¿Qué riesgo existe al no actualizar el sistema?",
opciones:[
"Vulnerabilidades de seguridad",
"Mejor rendimiento",
"Menos procesos",
"Ninguno"
],
correcta:0
},

{
pregunta:"¿Por qué el mantenimiento es preventivo?",
opciones:[
"Evita fallos antes de que ocurran",
"Corrige errores después",
"Reduce usuarios",
"No tiene función"
],
correcta:0
},

{
pregunta:"¿Qué consecuencia tiene acumular paquetes innecesarios?",
opciones:[
"Ocupación de espacio y posible degradación",
"Mejora el sistema",
"Aumenta CPU",
"No afecta"
],
correcta:0
},

{
pregunta:"¿Qué relación tiene el mantenimiento con la seguridad?",
opciones:[
"Reduce vulnerabilidades",
"No tiene relación",
"Aumenta procesos",
"Reduce red"
],
correcta:0
},

{
pregunta:"¿Qué acción es adecuada ante un sistema desactualizado?",
opciones:[
"Actualizar paquetes",
"Apagar sistema",
"Ignorar",
"Eliminar archivos"
],
correcta:0
},

{
pregunta:"¿Qué busca un plan de mantenimiento?",
opciones:[
"Prevenir fallos y optimizar recursos",
"Aumentar errores",
"Reducir seguridad",
"Eliminar usuarios"
],
correcta:0
},

/* =========================
RESPALDOS
========================= */

{
pregunta:"¿Qué tipo de respaldo es cp -r?",
opciones:[
"Completo",
"Incremental",
"Diferencial",
"Parcial"
],
correcta:0
},

{
pregunta:"¿Por qué es respaldo completo?",
opciones:[
"Copia toda la información",
"Solo copia cambios",
"Solo copia archivos nuevos",
"No copia nada"
],
correcta:0
},

{
pregunta:"¿Ventaja del respaldo completo?",
opciones:[
"Fácil recuperación",
"Menor espacio",
"Más rápido siempre",
"Menos seguro"
],
correcta:0
},

{
pregunta:"¿Desventaja del respaldo completo?",
opciones:[
"Mayor uso de espacio",
"No guarda datos",
"Es inseguro",
"No funciona"
],
correcta:0
},

{
pregunta:"¿Qué pasa si no hay respaldo?",
opciones:[
"Se pierde la información",
"No pasa nada",
"Mejora el sistema",
"Reduce CPU"
],
correcta:0
},

{
pregunta:"¿Por qué es importante verificar un respaldo?",
opciones:[
"Confirmar que la copia funciona",
"Reducir memoria",
"Aumentar CPU",
"No es necesario"
],
correcta:0
},

{
pregunta:"¿Qué objetivo tiene un respaldo?",
opciones:[
"Recuperar información ante fallos",
"Eliminar archivos",
"Reducir procesos",
"Optimizar CPU"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si el respaldo está dañado?",
opciones:[
"No se puede recuperar la información",
"Se mejora el sistema",
"No afecta",
"Aumenta rendimiento"
],
correcta:0
},

/* =========================
CRON (AUTOMATIZACIÓN)
========================= */

{
pregunta:"¿Qué es cron en sistemas Linux?",
opciones:[
"Un programador de tareas automáticas",
"Un antivirus",
"Un gestor de archivos",
"Un editor de texto"
],
correcta:0
},

{
pregunta:"¿Para qué sirve cron?",
opciones:[
"Ejecutar tareas automáticamente en horarios definidos",
"Eliminar procesos",
"Actualizar el sistema automáticamente sin control",
"Reducir el uso de memoria"
],
correcta:0
},

{
pregunta:"¿Qué representa la expresión 0 2 * * *?",
opciones:[
"Ejecutar una tarea todos los días a las 2:00 AM",
"Ejecutar cada minuto",
"Ejecutar cada hora",
"Ejecutar una vez al mes"
],
correcta:0
},

{
pregunta:"¿Qué campo representa la hora en una expresión cron?",
opciones:[
"El segundo campo",
"El primero",
"El tercero",
"El cuarto"
],
correcta:0
},

{
pregunta:"¿Qué ventaja tiene automatizar respaldos?",
opciones:[
"Evitar errores humanos y asegurar ejecución periódica",
"Reducir CPU",
"Aumentar memoria",
"Eliminar archivos automáticamente"
],
correcta:0
},

{
pregunta:"¿Qué sucede si no se automatizan los respaldos?",
opciones:[
"Dependen de intervención manual y pueden olvidarse",
"Se ejecutan automáticamente",
"Mejoran rendimiento",
"No cambia nada"
],
correcta:0
},

{
pregunta:"¿Por qué es importante validar una tarea cron?",
opciones:[
"Para asegurarse de que realmente se ejecuta",
"Para reducir memoria",
"Aumentar CPU",
"No es necesario"
],
correcta:0
},

{
pregunta:"¿Qué problema puede existir si una tarea cron falla?",
opciones:[
"No se realiza el respaldo esperado",
"Se mejora el sistema",
"No tiene impacto",
"Aumenta rendimiento"
],
correcta:0
},

/* =========================
INTEGRADOR
========================= */

{
pregunta:"¿Qué ocurre si los usuarios no siguen las políticas de seguridad?",
opciones:[
"La seguridad del sistema se compromete",
"El sistema mejora",
"No pasa nada",
"Se eliminan riesgos"
],
correcta:0
},

{
pregunta:"¿Qué elemento es más importante en la seguridad del sistema?",
opciones:[
"Todos son importantes y trabajan en conjunto",
"Solo el firewall",
"Solo los usuarios",
"Solo las contraseñas"
],
correcta:0
},

{
pregunta:"¿Qué pasaría en un sistema donde todos son administradores, hay permisos abiertos y puertos expuestos?",
opciones:[
"El sistema tiene alto riesgo de vulnerabilidad",
"El sistema es seguro",
"No tiene impacto",
"Mejora rendimiento"
],
correcta:0
},

{
pregunta:"¿Por qué la seguridad no depende de una sola configuración?",
opciones:[
"Porque es un conjunto de controles y decisiones",
"Porque solo depende del usuario",
"Porque depende del hardware",
"No depende de nada"
],
correcta:0
},

{
pregunta:"¿Qué relación existe entre usuarios, permisos y firewall?",
opciones:[
"Todos contribuyen a la seguridad del sistema",
"No tienen relación",
"Solo afectan el rendimiento",
"Solo afectan memoria"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si un permiso está mal configurado?",
opciones:[
"Puede generar vulnerabilidades",
"Mejora la seguridad",
"No tiene impacto",
"Reduce CPU"
],
correcta:0
},

{
pregunta:"¿Qué sucede si el sistema está actualizado pero mal configurado?",
opciones:[
"Sigue siendo vulnerable",
"Es totalmente seguro",
"No importa",
"Mejora rendimiento"
],
correcta:0
},

{
pregunta:"¿Qué decisión debe tomar un administrador ante múltiples riesgos?",
opciones:[
"Priorizar según nivel de riesgo",
"Ignorar",
"Eliminar sistema",
"No hacer nada"
],
correcta:0
},

{
pregunta:"¿Qué objetivo tiene integrar todas las medidas de seguridad?",
opciones:[
"Reducir riesgos de manera integral",
"Reducir CPU",
"Aumentar memoria",
"Eliminar usuarios"
],
correcta:0
}

];