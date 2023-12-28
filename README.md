# Evaluador de Expresiones

Este proyecto es un evaluador de expresiones matemáticas diseñado para enseñar los conceptos de tipos de datos en Python. El evaluador resuelve expresiones paso a paso y muestra el tipo de datos de cada número involucrado.

## Características

- Resuelve expresiones matemáticas paso a paso.
- Enseña conceptos de tipos de datos en python.

## Uso

1. **Expresiones directas en el navegador:**

   - Abre el archivo `index.html` en tu navegador.
   - Ingresa la expresión que deseas evaluar, por ejemplo, "1 + 2 * 3 + 9 + a * b".
   - Ingresa el valor de a y b, por ejemplo: a = 1.2 y b = 2.3
   - Observa la resolución paso a paso y los tipos de datos involucrados.

2. **Expresiones desde un archivo:**

   - Crea un archivo de texto con cada expresión en una línea separada.
     ```
     4+5*a
     7+8*10
     ```
   - Abre el archivo `index.html` en tu navegador.
   - Selecciona la opción para procesar expresiones desde un archivo.
   - Selecciona el archivo de texto creado.
   - Observa la resolución de cada expresión en el archivo.

## Ejemplo de Uso

Supongamos que queremos evaluar la expresión matemática: `1+2*3+9+a*b`
```  1     +   2     *   3     +   9     +   a     *   b
int       int       int       int       var       var
Ingrese el valor de a: 1.1
Ingrese el valor de b: 2.2
  1     +   2     *   3     +   9     +    1.1     *    2.2
int       int       int       int       double       double
  1     +   6     +   9     +    1.1     *    2.2
int       int       int       double       double
  1     +   6     +   9     +   2.42
int       int       int       double
  7     +   9     +   2.42
int       int       double
 16     +   2.42
int       double
 18.42
double
```

Enlaces del sitio desplegado:
- [Netlify](https://venerable-strudel-719646.netlify.app/)
- [GitHub Pages](https://darwing-21.github.io/Evaluador-Expresiones/)
