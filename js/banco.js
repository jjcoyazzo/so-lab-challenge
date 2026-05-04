window.banco = [

/* =========================
MÉTODOS DE INSTALACIÓN
========================= */

{
pregunta:"¿Qué caracteriza a una instalación mínima en Linux?",
opciones:[
"Solo incluye servicios esenciales sin entorno gráfico",
"Incluye todos los programas disponibles",
"Instala únicamente drivers",
"No incluye kernel"
],
correcta:0
},

{
pregunta:"¿Cuál es la principal ventaja de una instalación mínima?",
opciones:[
"Menor consumo de recursos",
"Mayor uso de memoria",
"Más interfaz gráfica",
"Mayor consumo de CPU"
],
correcta:0
},

{
pregunta:"¿Qué es una instalación completa?",
opciones:[
"Incluye múltiples paquetes y herramientas adicionales",
"No incluye programas",
"Solo instala red",
"Elimina servicios"
],
correcta:0
},

{
pregunta:"¿Qué es NetInstall?",
opciones:[
"Instalación que descarga paquetes desde internet",
"Instalación sin red",
"Instalación manual",
"Instalación desde USB"
],
correcta:0
},

{
pregunta:"¿Qué ventaja tiene NetInstall?",
opciones:[
"Instala solo lo necesario desde internet",
"Instala todo automáticamente sin red",
"No requiere conexión",
"Elimina configuración"
],
correcta:0
},

{
pregunta:"¿Qué es Kickstart o Preseed?",
opciones:[
"Métodos de instalación automatizada",
"Tipos de kernel",
"Sistemas de archivos",
"Protocolos de red"
],
correcta:0
},

{
pregunta:"¿Cuál es el beneficio de la instalación automatizada?",
opciones:[
"Ahorra tiempo en múltiples instalaciones",
"Reduce seguridad",
"Aumenta errores",
"Elimina configuración"
],
correcta:0
},

{
pregunta:"¿Qué método es más útil en empresas grandes?",
opciones:[
"Instalación automatizada",
"Instalación manual siempre",
"Instalación completa",
"Ninguno"
],
correcta:0
},

{
pregunta:"¿Qué método usarías para aprender Linux?",
opciones:[
"Instalación mínima o manual",
"Automatizada siempre",
"Ninguno",
"Solo completa"
],
correcta:0
},

{
pregunta:"¿Qué implica elegir mal un método de instalación?",
opciones:[
"Uso ineficiente de recursos",
"Mejor rendimiento",
"No afecta",
"Aumenta seguridad"
],
correcta:0
},

/* =========================
CONFIGURACIÓN DEL SISTEMA
========================= */

{
pregunta:"¿Qué es el hostname en un servidor?",
opciones:[
"Nombre del equipo en la red",
"Dirección IP",
"Usuario",
"Puerto"
],
correcta:0
},

{
pregunta:"¿Por qué es importante cambiar el hostname?",
opciones:[
"Identificar el servidor en la red",
"Mejorar gráficos",
"Reducir CPU",
"No tiene importancia"
],
correcta:0
},

{
pregunta:"¿Qué comando se utiliza para cambiar el hostname en Linux?",
opciones:[
"hostnamectl",
"ipconfig",
"dir",
"ping"
],
correcta:0
},

{
pregunta:"¿Qué permite configurar timedatectl?",
opciones:[
"Fecha y zona horaria",
"Usuarios",
"Red",
"Disco"
],
correcta:0
},

{
pregunta:"¿Por qué es importante la zona horaria en servidores?",
opciones:[
"Sincronización correcta de eventos",
"Mejorar velocidad",
"Aumentar RAM",
"No importa"
],
correcta:0
},

{
pregunta:"¿Qué comando se usa para crear usuarios?",
opciones:[
"adduser",
"mkuser",
"new",
"usercreate"
],
correcta:0
},

{
pregunta:"¿Por qué no se recomienda usar root directamente?",
opciones:[
"Riesgos de seguridad",
"Reduce rendimiento",
"Elimina usuarios",
"No permite acceso"
],
correcta:0
},

{
pregunta:"¿Qué significa dar permisos sudo?",
opciones:[
"Permitir ejecutar tareas administrativas",
"Eliminar usuario",
"Crear red",
"Reducir seguridad"
],
correcta:0
},

{
pregunta:"¿Qué archivo contiene los usuarios del sistema?",
opciones:[
"/etc/passwd",
"/etc/network",
"/home",
"/var"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si no gestionas bien los usuarios?",
opciones:[
"Riesgos de acceso no autorizado",
"Mejor rendimiento",
"No afecta",
"Aumenta velocidad"
],
correcta:0
},

/* =========================
CONFIGURACIÓN DE RED
========================= */

{
pregunta:"¿Qué comando muestra la configuración de red?",
opciones:[
"ip a",
"dir",
"copy",
"lsusb"
],
correcta:0
},

{
pregunta:"¿Qué es una IP estática?",
opciones:[
"Dirección fija que no cambia",
"Dirección aleatoria",
"Dirección temporal",
"Dirección interna"
],
correcta:0
},

{
pregunta:"¿Qué es DHCP?",
opciones:[
"Asignación automática de IP",
"Asignación manual",
"Firewall",
"Servicio web"
],
correcta:0
},

{
pregunta:"¿Qué comando se usa para probar conectividad?",
opciones:[
"ping",
"dir",
"ls",
"nano"
],
correcta:0
},

{
pregunta:"¿Qué indica que el ping funciona?",
opciones:[
"Hay conexión de red",
"No hay conexión",
"Falla el sistema",
"No hay usuarios"
],
correcta:0
},

{
pregunta:"¿Qué comando muestra puertos abiertos?",
opciones:[
"ss -tuln",
"dir",
"ps",
"top"
],
correcta:0
},

{
pregunta:"¿Por qué es importante revisar puertos?",
opciones:[
"Evitar accesos no autorizados",
"Mejorar gráficos",
"Aumentar CPU",
"No es necesario"
],
correcta:0
},

{
pregunta:"¿Qué pasa si la red está mal configurada?",
opciones:[
"El servidor no será accesible",
"Mejora rendimiento",
"No afecta",
"Aumenta velocidad"
],
correcta:0
},

/* =========================
SEGURIDAD
========================= */

{
pregunta:"¿Por qué es importante actualizar el sistema?",
opciones:[
"Corregir vulnerabilidades",
"Eliminar usuarios",
"Aumentar RAM",
"No es necesario"
],
correcta:0
},

{
pregunta:"¿Qué herramienta se usa como firewall básico en Ubuntu?",
opciones:[
"UFW",
"SSH",
"APT",
"DNS"
],
correcta:0
},

{
pregunta:"¿Qué hace ufw enable?",
opciones:[
"Activa el firewall",
"Lo elimina",
"Reinicia sistema",
"No hace nada"
],
correcta:0
},

{
pregunta:"¿Qué significa permitir SSH en firewall?",
opciones:[
"Abrir el puerto para acceso remoto",
"Bloquear red",
"Eliminar usuario",
"No tiene función"
],
correcta:0
},

{
pregunta:"¿Qué es SSH?",
opciones:[
"Protocolo de acceso remoto seguro",
"Firewall",
"Servidor web",
"Editor"
],
correcta:0
},

{
pregunta:"¿Por qué desactivar root en SSH?",
opciones:[
"Mejorar seguridad",
"Aumentar velocidad",
"Eliminar red",
"No afecta"
],
correcta:0
},

{
pregunta:"¿Qué riesgo hay si no configuras SSH?",
opciones:[
"Accesos no seguros",
"Mejor rendimiento",
"No afecta",
"Aumenta velocidad"
],
correcta:0
},

{
pregunta:"¿Qué hace systemctl?",
opciones:[
"Gestiona servicios",
"Crea usuarios",
"Configura red",
"Edita archivos"
],
correcta:0
},

{
pregunta:"¿Por qué revisar servicios activos?",
opciones:[
"Detectar procesos innecesarios",
"Mejorar gráficos",
"Aumentar RAM",
"No importa"
],
correcta:0
},

{
pregunta:"¿Qué pasa si no aplicas seguridad?",
opciones:[
"El servidor es vulnerable",
"Mejora rendimiento",
"No afecta",
"Aumenta velocidad"
],
correcta:0
},

/* =========================
SERVICIOS
========================= */

{
pregunta:"¿Qué es un servidor web?",
opciones:[
"Servicio que responde peticiones HTTP",
"Usuario",
"Disco",
"Firewall"
],
correcta:0
},

{
pregunta:"¿Qué hace Apache?",
opciones:[
"Servidor web",
"Firewall",
"Editor",
"Antivirus"
],
correcta:0
},

{
pregunta:"¿Qué comando instala Apache en Ubuntu?",
opciones:[
"apt install apache2",
"install apache",
"run apache",
"get apache"
],
correcta:0
},

{
pregunta:"¿Cómo verificas si Apache funciona?",
opciones:[
"systemctl status apache2",
"ping",
"ls",
"nano"
],
correcta:0
},

{
pregunta:"¿Qué significa que un servicio esté activo?",
opciones:[
"Está funcionando correctamente",
"Está apagado",
"No existe",
"No tiene red"
],
correcta:0
},

{
pregunta:"¿Qué ocurre si el servicio no arranca?",
opciones:[
"No estará disponible",
"Mejora rendimiento",
"No afecta",
"Aumenta velocidad"
],
correcta:0
},

/* =========================
VALIDACIÓN Y ANÁLISIS
========================= */

{
pregunta:"¿Qué comando muestra el usuario actual?",
opciones:[
"whoami",
"dir",
"ping",
"nano"
],
correcta:0
},

{
pregunta:"¿Qué muestra df -h?",
opciones:[
"Uso de disco",
"Usuarios",
"Red",
"Procesos"
],
correcta:0
},

{
pregunta:"¿Qué muestra free -h?",
opciones:[
"Uso de memoria",
"Disco",
"Usuarios",
"Red"
],
correcta:0
},

{
pregunta:"¿Qué significa que un servidor esté configurado?",
opciones:[
"Listo para operar y ofrecer servicios",
"Apagado",
"Sin usuarios",
"Sin red"
],
correcta:0
},

{
pregunta:"¿Qué diferencia hay entre instalar y configurar?",
opciones:[
"Instalar es colocar el sistema, configurar es ajustarlo",
"No hay diferencia",
"Configurar elimina sistema",
"Instalar asegura red"
],
correcta:0
},

{
pregunta:"¿Qué riesgo existe si no documentas?",
opciones:[
"No se puede replicar el proceso",
"Mejora rendimiento",
"No afecta",
"Aumenta seguridad"
],
correcta:0
},

{
pregunta:"¿Qué caracteriza a un administrador competente?",
opciones:[
"Configura, analiza y asegura sistemas",
"Solo instala programas",
"Usa interfaz gráfica",
"No documenta"
],
correcta:0
}

];