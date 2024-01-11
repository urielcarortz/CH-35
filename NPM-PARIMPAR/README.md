#Crear y publicar 

1.Inicilizar npm desde CLIcon el comando 

    sh
    npm init 
    Me guira a traves de una seria de pasos done me solicite informacion relacionada con mi package como el nombre la version la descripcion el puntos de entrada (index.js) comando de puruba, repositorio de git en donde vive, palabras clave pra coincidir con busquedad, autor, licencia.

    2. Presionar enter para aceptar que la informacionn  es correcta y generar el archivo 'package.json'
    <-> package.json
        -contiene informacion sobre el proyecto-modulo que vamos a crear. son un estandar de node.jspara faciilitar la estructura y ejecucion de loas proyectos dentro del entorno de ejecucion
3.crear una carpeta llamada `modules` en donde vivira nuestro script
4. 4. Dentro de `modules` crear el script (.js) con el nombre `parimpar.js`
5. crear la funcion del script y exportarlo con`export default`
6. Importar el script desde el archivo 
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta` e invocamos la función con parámetros.

7. configurar el `"type": "module"` en el archivo `package.json`
8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```
## Publicar package en npm
1. Iniciar sesión de npm pero ahora desde CLI con el comando
```sh
npm login
```
2. Agregar el nombre de usuario que ya habíamos definido en npm, password y email.
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso público desde CLI a npm con el comando 
```sh
npm publish --access=public
```
