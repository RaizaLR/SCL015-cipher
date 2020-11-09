# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Decidí elegir el proyecto Cifrado César debido que tuve una idea desde el principio de crear una página web que le permita a los usuarios crear claves para sus cuentas online que fueran más seguras. Basandome en el hecho de que muchas personas utilizan claves en sus cuentas las cuales son muy fáciles de adivinar, ya que por ejemplo utilizan sus nombres o sus fechas de nacimiento, y me parecio que esta página resolvía ese problema porque pueden utilizar palabras o frases que sean faciles de recordar pero al pasarlas por un cifrado esto haría que fueran mucho más dificiles de adivinar.

## 2. Resumen del proyecto

En este proyecto creé una aplicación web con el objetivo principal de permitir al usuario crear claves seguras para cuentas online. Permitiendo que pueda cifrar y descifrar sus claves indicando un desplazamiento específico de caracteres (número secreto).


## 3. Proceso de creación y diseño

Una vez que ya habia decidido la idea de la aplicación web, y tuve que empezar a pensar en el diseño, en lo primero que pensé fue en una caja fuerte, ya que de esa forma podemos ver a nuestras cuentas online, como una caja fuerte que solo nosotros sabemos el codigo secreto, el cual no queremos que otras personas sepan o adivinen, luego pensé en utilizar una paleta de colores azules ya que en la psicología del color aplicado al diseño y el marketing, mencionan que los colores azules brindan una sensación de seguridad al usuario.

### Figma

Luego de tener estos dos elementos, lo primero que hice fue dirigirme a figma para empezar a trazar ahí el diseño de la página web. 


## Criterios de aceptación mínimos del proyecto

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Consideraciones técnicas

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.


```



## 9. Checklists

 [ ] Pasa linter con configuración provista.
 [ ] Pasa pruebas unitarias.
 [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.


