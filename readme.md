# Ejemplos M4 Intro a JS

Ejemplos del módulo introducción a JavaScript

## Script de bash

El archivo `bashScript` suele funcionar mejor con sistemas Unix (linux/mac)
que con sistemas windows.
La finalidad de este archivo es que al momento de hacer un commit al repo
Se cree un push de forma automática, así no se pierden las modificaciones
del proyecto por mis pavadas 🦃

Importante:

- `#!bin/sh` o `#!bin/bash` es un comentario que va al principio
de cada archivo ejecutable en linux/mac, e indica "quien" de encargará de
la ejecución.
- La modificación de GIT mediante [hooks][1]
podría generar comportamientos no esperados en tu flujo de trabajo GIT

[1]: https://git-scm.com/book/es/v2/Personalizaci%C3%B3n-de-Git-Puntos-de-enganche-en-Git "Git hooks"
