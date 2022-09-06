# Arquitectura en capas servidor NODE con EXPRESS

API que simula la generación de mensajes por usuario, simulando un chat
Arquitectura API por capas
Ejemplo de subida de archivos al servidor y visualizacion el la carpeta estática public.

Actualizacion en tiempo real con soquetIO

## Tecnologías
Express para levantar el servidor y gestionar el ruteo
SoquetIO

Para una mejor experiencia interactuar con Postman

1. Ejecuta la aplicación con: node server.js
2. Interactuar con API vía Postman o similar

## Cómo interactuar
Primero hay que crear un listado de usuarios. Hacer una petición por cada conjunto de usuarios. La estructura es la siguiente:
`{
  "name": "User Name"
}`

A continuación es necesario crear un conjunto de usuarios por chat; hay que pasar el listado de IDs generados anteriormente a un array. La estructura de la peticion POST es la siguiente:
`{
    "users": ["63167ebc230bb3064691e3f", "63167bba78532e1950a0470a", "87542701566a5f3220249330"]
}`

Recuperamos el listado al chat asociado pasado el id, via query string

Después hay que crear los mensajes de usuario, pasando como identidficador a la propiedad user el ID del usuario
`{
    "user": "63167bba24232e1954a0570a",
    "message": "I'm lenf of node and express to create api"
}`

Recuperamos los mensajes del chat asociados al usuario y no otros pasando el query string de id del chat al final de la url:
`http://localhost:3000/message/?chat=631697be0888772060f09b09`

## Para visualizar la actualizacion en tiempo real

1. Acceder a la siguiente ruta estática:
`http://localhost:3000/app/socket.html`

2. Crear mensajes por usuario.
3. Ver el objeto creado en la consola.

## Crear tu conexión como una variable de entorno en un archivo .env
CONECTION=`mongodb+srv://<user_name>:<password>@<cluster...mongodb.net>/<db_name>`