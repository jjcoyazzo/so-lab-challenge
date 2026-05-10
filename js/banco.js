window.banco = [

/* =========================
MANEJO DE ARCHIVOS Y DIRECTORIOS
========================= */

{
pregunta:"¿Qué comando se usa para crear directorios en Linux?",
opciones:[
"mkdir",
"dir",
"make",
"create"
],
correcta:0
},

{
pregunta:"¿Qué comando permite listar archivos y directorios?",
opciones:[
"ls",
"list",
"show",
"view"
],
correcta:0
},

{
pregunta:"¿Qué comando se utiliza para copiar archivos?",
opciones:[
"cp",
"copy",
"mv",
"cat"
],
correcta:0
},

{
pregunta:"¿Qué comando mueve o renombra archivos?",
opciones:[
"mv",
"cp",
"movefile",
"renamefile"
],
correcta:0
},

{
pregunta:"¿Qué comando elimina archivos?",
opciones:[
"rm",
"del",
"erase",
"clear"
],
correcta:0
},

{
pregunta:"¿Qué comando elimina directorios vacíos?",
opciones:[
"rmdir",
"rmfile",
"delete",
"erase"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra el contenido de un archivo?",
opciones:[
"cat",
"show",
"view",
"open"
],
correcta:0
},

{
pregunta:"¿Qué comando cambia permisos en Linux?",
opciones:[
"chmod",
"chperm",
"perm",
"grant"
],
correcta:0
},

{
pregunta:"¿Qué comando cambia propietario de un archivo?",
opciones:[
"chown",
"owner",
"chmod",
"passwd"
],
correcta:0
},

{
pregunta:"¿Por qué es importante organizar archivos y directorios?",
opciones:[
"Facilita administración y seguridad",
"Aumenta velocidad del internet",
"Reduce memoria RAM",
"No tiene importancia"
],
correcta:0
},

/* =========================
USUARIOS Y GRUPOS
========================= */

{
pregunta:"¿Qué comando crea usuarios en Linux?",
opciones:[
"adduser",
"mkuser",
"usernew",
"createuser"
],
correcta:0
},

{
pregunta:"¿Qué comando crea grupos?",
opciones:[
"groupadd",
"addgroupuser",
"mkgroup",
"newgroup"
],
correcta:0
},

{
pregunta:"¿Qué permite un grupo en Linux?",
opciones:[
"Organizar permisos para varios usuarios",
"Aumentar memoria",
"Eliminar archivos",
"Mejorar gráficos"
],
correcta:0
},

{
pregunta:"¿Qué comando cambia la contraseña de un usuario?",
opciones:[
"passwd",
"password",
"changepass",
"setpass"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra el usuario actual?",
opciones:[
"whoami",
"user",
"me",
"current"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra grupos de un usuario?",
opciones:[
"groups",
"showgroups",
"listgroups",
"groupview"
],
correcta:0
},

{
pregunta:"¿Por qué no todos los usuarios deben ser administradores?",
opciones:[
"Por seguridad y control del sistema",
"Para usar menos RAM",
"Para apagar el sistema",
"No importa"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si un usuario tiene permisos excesivos?",
opciones:[
"Puede modificar o dañar el sistema",
"No afecta",
"Mejora rendimiento",
"Aumenta velocidad"
],
correcta:0
},

{
pregunta:"¿Qué significa bloquear un usuario?",
opciones:[
"Impedir temporalmente su acceso",
"Eliminarlo",
"Dar permisos root",
"Apagar el sistema"
],
correcta:0
},

{
pregunta:"¿Qué archivo contiene información de usuarios?",
opciones:[
"/etc/passwd",
"/etc/network",
"/home",
"/boot"
],
correcta:0
},

/* =========================
PERMISOS
========================= */

{
pregunta:"¿Qué representan los permisos rwx?",
opciones:[
"Lectura, escritura y ejecución",
"Red, web y XML",
"RAM, web y xorg",
"Root, write y xserver"
],
correcta:0
},

{
pregunta:"¿Qué permiso permite leer un archivo?",
opciones:[
"r",
"w",
"x",
"d"
],
correcta:0
},

{
pregunta:"¿Qué permiso permite modificar archivos?",
opciones:[
"w",
"r",
"x",
"d"
],
correcta:0
},

{
pregunta:"¿Qué permiso permite ejecutar archivos?",
opciones:[
"x",
"r",
"w",
"e"
],
correcta:0
},

{
pregunta:"¿Qué significa chmod 777?",
opciones:[
"Todos tienen todos los permisos",
"Solo root tiene acceso",
"Archivo bloqueado",
"Archivo oculto"
],
correcta:0
},

{
pregunta:"¿Por qué chmod 777 es riesgoso?",
opciones:[
"Cualquier usuario puede modificar archivos",
"Reduce rendimiento",
"Elimina usuarios",
"No tiene riesgos"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra permisos de archivos?",
opciones:[
"ls -l",
"dir",
"tree",
"pwd"
],
correcta:0
},

{
pregunta:"¿Por qué son importantes los permisos?",
opciones:[
"Protegen información y controlan accesos",
"Mejoran gráficos",
"Aumentan RAM",
"No son necesarios"
],
correcta:0
},

/* =========================
SERVICIOS Y NIVELES DE EJECUCIÓN
========================= */

{
pregunta:"¿Qué es un servicio en Linux?",
opciones:[
"Programa que funciona en segundo plano",
"Usuario",
"Archivo",
"Kernel"
],
correcta:0
},

{
pregunta:"¿Qué herramienta administra servicios en systemd?",
opciones:[
"systemctl",
"serviceconfig",
"servicectl",
"adminservice"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra el estado de un servicio?",
opciones:[
"systemctl status",
"show service",
"service view",
"service check"
],
correcta:0
},

{
pregunta:"¿Qué comando inicia un servicio?",
opciones:[
"systemctl start",
"service on",
"run service",
"enable service"
],
correcta:0
},

{
pregunta:"¿Qué comando detiene un servicio?",
opciones:[
"systemctl stop",
"killservice",
"service off",
"pause service"
],
correcta:0
},

{
pregunta:"¿Qué comando reinicia un servicio?",
opciones:[
"systemctl restart",
"service reset",
"restart all",
"reload service"
],
correcta:0
},

{
pregunta:"¿Qué significa habilitar un servicio?",
opciones:[
"Que inicie automáticamente al arrancar",
"Eliminarlo",
"Desactivarlo",
"Bloquear red"
],
correcta:0
},

{
pregunta:"¿Qué son los niveles de ejecución?",
opciones:[
"Modos de operación del sistema",
"Tipos de usuarios",
"Particiones",
"Drivers"
],
correcta:0
},

{
pregunta:"¿Qué reemplazó a SysVinit en muchas distribuciones modernas?",
opciones:[
"systemd",
"bash",
"nano",
"GRUB"
],
correcta:0
},

{
pregunta:"¿Qué ventaja tiene systemd?",
opciones:[
"Administración moderna y rápida de servicios",
"Elimina usuarios",
"Reduce disco",
"No tiene ventajas"
],
correcta:0
},

/* =========================
INSTALACIÓN DE APLICACIONES
========================= */

{
pregunta:"¿Qué comando actualiza repositorios en Ubuntu?",
opciones:[
"apt update",
"update all",
"upgrade",
"refresh"
],
correcta:0
},

{
pregunta:"¿Qué comando instala programas en Ubuntu?",
opciones:[
"apt install",
"get program",
"installpkg",
"programadd"
],
correcta:0
},

{
pregunta:"¿Qué hace apt remove?",
opciones:[
"Desinstala programas",
"Instala programas",
"Actualiza sistema",
"Reinicia servicios"
],
correcta:0
},

{
pregunta:"¿Qué herramienta muestra procesos de manera interactiva?",
opciones:[
"htop",
"nano",
"curl",
"tree"
],
correcta:0
},

{
pregunta:"¿Qué utilidad tiene tree?",
opciones:[
"Mostrar estructura de directorios",
"Editar archivos",
"Revisar red",
"Actualizar sistema"
],
correcta:0
},

{
pregunta:"¿Qué hace curl?",
opciones:[
"Realiza solicitudes de red",
"Administra usuarios",
"Configura permisos",
"Gestiona disco"
],
correcta:0
},

{
pregunta:"¿Por qué es importante instalar solo aplicaciones necesarias?",
opciones:[
"Reduce riesgos y consumo de recursos",
"Aumenta vulnerabilidades",
"Reduce seguridad",
"No importa"
],
correcta:0
},

/* =========================
MONITORIZACIÓN DEL SISTEMA
========================= */

{
pregunta:"¿Qué comando muestra procesos activos?",
opciones:[
"ps",
"dir",
"tree",
"nano"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra procesos en tiempo real?",
opciones:[
"top",
"pwd",
"cat",
"find"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra uso de memoria RAM?",
opciones:[
"free -h",
"df -h",
"memory",
"ram"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra uso del disco?",
opciones:[
"df -h",
"disk",
"space",
"free"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra interfaces de red?",
opciones:[
"ip a",
"dir",
"show",
"route"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra usuarios conectados?",
opciones:[
"who",
"usershow",
"listuser",
"online"
],
correcta:0
},

{
pregunta:"¿Por qué es importante monitorear procesos?",
opciones:[
"Detectar problemas y consumo excesivo",
"Mejorar gráficos",
"Aumentar RAM",
"No es necesario"
],
correcta:0
},

{
pregunta:"¿Qué riesgo existe si no monitoreas el servidor?",
opciones:[
"Fallas y problemas no detectados",
"Mejor rendimiento",
"No afecta",
"Aumenta velocidad"
],
correcta:0
},

/* =========================
ADMINISTRACIÓN REAL Y ANÁLISIS
========================= */

{
pregunta:"¿Qué debe hacer un administrador Linux?",
opciones:[
"Gestionar usuarios, permisos y servicios",
"Solo instalar programas",
"Solo usar GUI",
"No documentar"
],
correcta:0
},

{
pregunta:"¿Qué diferencia hay entre usuario normal y root?",
opciones:[
"Root tiene control total del sistema",
"No hay diferencia",
"Root usa menos memoria",
"Usuario normal controla todo"
],
correcta:0
},

{
pregunta:"¿Por qué documentar configuraciones es importante?",
opciones:[
"Permite replicar y solucionar problemas",
"No sirve",
"Aumenta velocidad",
"Reduce CPU"
],
correcta:0
},

{
pregunta:"¿Qué caracteriza a un servidor bien administrado?",
opciones:[
"Seguridad, monitoreo y control adecuados",
"Muchos errores",
"Todos con permisos root",
"Sin actualizaciones"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si un servicio crítico falla?",
opciones:[
"El servidor puede dejar de funcionar correctamente",
"No afecta",
"Mejora seguridad",
"Aumenta RAM"
],
correcta:0
},

{
pregunta:"¿Por qué Linux es popular en servidores?",
opciones:[
"Estabilidad, seguridad y administración avanzada",
"Porque consume más recursos",
"Porque requiere reinicios constantes",
"No tiene ventajas"
],
correcta:0
}

];