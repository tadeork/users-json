# Datos de usuario falsos

Produce un archivo JSON con 20 usuarios y 10 posts cada uno. Su estructura es:

    [{
    {
        "id": 0,
        "first_name": "Jayson",
        "last_name": "Osinski",
        "email": "Fermin51@gmail.com",
        "user_name": "Wilfrid.Koepp59",
        "password": "123abc",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/madebybrenton/128.jpg",
        "posts": [
            {
                "post_id": 0,
                "content": "Consectetur qui quam eum dolor sed et magnam nostrum dignissimos.",
                "likes": "0"
            },
	.
    .
    .

## Requisitos

Es necesario tener instalado NodeJS y json-server, preferentemente realizar todo esto acompañado de un mate amargo.

## Modo de uso

    $ npm install
    $ node users.js
    $ json-server --watch data.json
