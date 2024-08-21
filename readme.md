<h1 align="center">API REST</h1>

Desarrollar una API REST que permita interactuar con un sistema de registro de datos astrológicos de las personas. Al interactuar con la API se debe poder realizar las acciones detalladas más abajo, algunas de las cuales necesitan autorización especial. Para controlar el acceso a los recursos privados vamos a usar el sistema de autenticación por tokens.

#### CRUD DE USUARIOS

    -   Registrar un nuevo usuario
    -   Login y autenticación por token.
    -   Obtener todos los usuarios sin mostrar datos sensibles.
    -   Modificar datos de un usuario (NECESARIO ESTAR LOGUEADO).
    -   Eliminar usuario (NECESARIO ESTAR LOGUEADO).
    -   Logout (NECESARIO ESTAR LOGUEADO).

#### CRUD DE PRODUCTOS

    -   Obtener todos los productos.
    -   Crear un producto (NECESARIO ESTAR LOGUEADO).
    -   Actualizar un producto (NECESARIO ESTAR LOGUEADO).
    -   Eliminar un producto (NECESARIO ESTAR LOGUEADO).

Pueden armar la estructura de carpetas del proyecto de esta forma:

-   src/

    -   controllers
        -   auth.ts
        -   users.ts
        -   products.ts

    -   services
        -   auth.ts
        -   users.ts
        -   products.ts

    -   database
        -   auth.json
        -   users.json
        -   products.json

    -   models
        -   auth.ts
        -   users.ts
        -   products.ts
        

    -   routes
        -   index.ts
        -   auth.ts
        -   products.ts
        -   users.ts

    -   index.ts
    -   app.ts

**products.json** es una collection cuyos objetos tienen la forma:

`{`
`"id": "ac838afb-d8bb-4a40-8984-761152735c77",`
`"description": "un producto buenísimo",`
`"sellPrice": "50000",`
`}`

**users.json** es también una collection, sus objetos son así:

`{`
`"id": "312323-d2bb-5d20-8984-122352735c77",`
`"username": "Juanito",`
`"email": "juan@ito.com",`
`"token": "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",`
`}`

**auth.json** es también una collection, sus objetos son así:

`{`
`"id": "ac848afv-d2bb-5d20-8984-122352735c77",`
`"userId": "312323-d2bb-5d20-8984-122352735c77",`
`"password": "3c9909afee38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",`
`}`

<h1 align="center">PASOS para arrancar el proyecto</h1>

1. Crear la estructura de carpetas
2. Instalar y configurar las dependencias necesarias
    - Iniciar el proyecto con NPM
    - Instalar dependencias de desarrollo y principales
3. Iniciar el repo de git y hacer el primer commit
4. Desarrollar el endpoint para obtener la info general de la API.
5. Configurar los scripts, testearlos y hacer el deploy a Render (crear un nuevo servicio WEB).
6. Desarrollar el endpoint de login
7. Desarrollar el middleware para autorizar usuarios
8. Desarrollar el endpoint para crear un nuevo producto
9. Validar los datos con zod
10. Probar el endpoint con datos reales: una alumna comparte su puerto y el resto le hace una solicitud para crear un usuari hasta completar la DB con los datos de todas
11. Commitear los cambios y pushear a GH.
12. Completar el resto de los endpoints

<h1 align="center">BUENAS PRÁCTICAS | ¿Cómo crear APIs robustas?</h1>
<h3 align="center">Artículo producido por EDTEAM</h3>

Las APIs son como traductores que permiten que las aplicaciones se puedan comunicar entre sí, como cuando quieres iniciar sesión en un sitio web con tu cuenta de Gmail. Sin embargo, las APIs también pueden ser vulnerables a ataques y en este blog, te daré 5 consejos para que crees APIs más robustas.

#### Válida todas las entradas.

No confíes en el frontend (no significa que el frontend no lo haga bien). Recuerda que tus API pueden ser consumidas adicional a tu frontend desde otros servicios, así que es importante que valides todas las entradas en tu API.

#### Controla adecuadamente los errores.

Es importante que controles todos los errores que pueden ocurrir dentro de la validación o dentro del proceso de tu API. Incluso, durante las excepciones que se generan. Asegúrate de devolverle el mensaje correcto a tu cliente para que él sepa qué fue lo que falló. Procura evitar devolver esos errores generales, que solo dicen “ups, ocurrió un error”, y mejor indícale a tu cliente exactamente qué falló.

Por ejemplo:

1- La edad debe ser un número entero positivo.

2- El ID tiene que ser del formato x, y, z.

3- El nombre no puede estar vacío.
