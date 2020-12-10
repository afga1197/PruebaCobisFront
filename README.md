# Prueba

Este pryecto fue realizado con el framework angular en su version 10.2.0. A continuacion se explicara brevemente como debe preparar su ambiente para la ejecucion del programa, con la finalidad de garantizar el correcto funcionamiento del software se sugiere emplear un sistema operativo windows en su version 10 x64.

Las instrucciones que encontrara a continuacion solo son aplicables a sistemas windows, si posee un sistema operativo diferente por favor consulte la pagina del fabricante de la herramienta para mas informacion.

Es importante ejecutar estas instalaciones en la misma secuencia en que se describe cada proceso.

# Node.js

Para poder emplear angular es necesario la instalacion del paquete mpm manager incluido en Node.j, para esto por favor descargue el instalador en la pagina del fabricante en el siguiente link https://nodejs.org/en/. Una vez finalizada la descargar ejecute el instalador y sigas las instrucciones del mismo (Es importante mantener las opciones que vienen por defecto en el instalador, ademas verifique que la opcion de crear la variable path este seleccionada). Para comprobar que el proceso fue exitoso, abra un CMD e ingrese el comando "node -v" este le tendra que retornar la version de su node, sino es asi por favor consulte en la pagina del fabricante el error que le genera.

#Angular CLI

Para instalar Angular CLI abra una terminal e ingrese el siguiente comando "npm install -g @angular/cli" cuando inicie el proceso se le mostrara el avance del mismo, si se genera alguna inconsistencia por favor consultar la pagina del fabricante.

# Visual Studio Code

Para modificar el proyecto se sugiere el editor de texto Visual Studio Code, para instalarlo por favro dirijase a la pagina del fabricante en el siguiente link https://code.visualstudio.com/. Una vez descargado ejecute el instalador y siga las instrucciones del mismo.

# Programa

Para ejecutar el programa descargue el archivo zip que genera github, una vez finalizada la descarga descomprimalo en la ubicacion de su preferencia. Posteriormente dirijase a visual studio code y en la opcion FIle seleccion open folder, alli debera escoger la ubicacion en donde descomprimio el proyecto. Antes de ejectarcula abra un CMD o desde la terminal que ofrece visual studio code y dirijase a la ubicacion del proyecto, una vez alli ingrese el comando npm "install --save" y finalmente ingrese el comando "ng serve --open" para ejecutar el proyecto.

# Nota

Los comandos ingresados en la presente guia fueron empleados con una version de node js 15 6.14.8 y un npm en version 6.14.8. Algunos comandos pueden variar si se emplea otras version tanto de node js como de npm. Si es su caso por favor consulte la pagina del fabricante para comprobar la actualizacion del comando.
