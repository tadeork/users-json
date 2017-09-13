# Datos de usuario falsos

Produce un archivo JSON con 5 usuarios y 3 posts cada uno. Su estructura es:


    {
     "users": [
        {
            "lastName": "Kuhlman",
            "firstName": "Leola",
            "email": "Horacio.Collins@yahoo.com",
            "userName": "Murphy.Kling20",
            "password": "123abc",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/barputro/128.jpg",
            "friends": [],
            "posts": [
                {
                    "contentPost": "Vero rerum officia. Natus dolorem laborum itaque aut quos nobis nobis asperiores et.",
                    "id": 0,
                    "likes": 0
                },

## Requisitos

Es necesario tener instalado NodeJS y json-server, preferentemente realizar todo esto acompañado de un mate amargo.

## Modo de uso

    $ npm install
    $ node users.js
    $ json-server --watch data.json

Es accesible a través de http://locahost:3000/users
