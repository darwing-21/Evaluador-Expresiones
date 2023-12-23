document.getElementById("ejecutar").addEventListener("click", handleExecute);
document.getElementById("ejecutar-1").addEventListener("click", handleExecute2);
function handleExecute() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (file) {
    const fileName = file.name.toLowerCase();
    if (fileName.endsWith(".txt")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const content = e.target.result;
        const lines = content
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const array = lines.map((line) => line.replace(/\s+/g, ""));
        for (let i = 0; i < array.length; i++) {
          evaluarExpresion(array[i], i, "resultado-section");
        }
      };

      reader.readAsText(file);
    } else {
      alert("Por favor, seleccione un archivo de texto (.txt).");
    }
  } else {
    alert("Por favor, seleccione un archivo.");
  }
}

function handleExecute2() {
  const expresionInput = document.getElementById("text");
  const expresion = expresionInput.value.trim();
  if (!expresion) {
    alert("Ingrese una expresión antes de ejecutar.");
    return;
  }
  evaluarExpresion(expresion, 0, "resultado-section-1");
}


function obtenerValor(variable, expresion) {
  return prompt(
    "Ingrese el valor de " + variable + " de la " + expresion + " : "
  );
}

function evaluarExpresion(expresion, j, id) {
  var expre = convertirAArreglo(expresion);
  var h2 = document.createElement("h2");
  h2.textContent = "Ejercicio " + (j + 1);
  var table = document.createElement("table");
  var resultadoSection = document.getElementById(id);
  resultadoSection.appendChild(h2);
  imprimir(expre, table, id);
  for (var i = 0; i < expre.length; i++) {
    var elemento = expre[i];
    if (!esNumero(elemento) && !esOperador(elemento)) {
      var valor = obtenerValor(elemento, expresion);
      expre[i] = valor;
    }
  }
  siguientePaso(expre, table, id);
}

function siguientePaso(expresion, table, id) {
  let multiplicacion = false;
  imprimir(expresion, table, id);

  if (expresion.length < 3) {
    return;
  }

  for (var i = 0; i < expresion.length; i++) {
    if (expresion[i] === "*") {
      var valor1 = parseFloat(expresion[i - 1]);
      var valor2 = parseFloat(expresion[i + 1]);
      var valor = valor1 * valor2;
      expresion.splice(i - 1, 3, valor);
      multiplicacion = true;
      break;
    } else if (expresion[i] === "/") {
      var valor1 = parseFloat(expresion[i - 1]);
      var valor2 = parseFloat(expresion[i + 1]);
      var valor = valor1 / valor2;
      expresion.splice(i - 1, 3, valor);
      multiplicacion = true;
      break;
    }
  }
  if (multiplicacion == false) {
    for (var i = 0; i < expresion.length; i++) {
      if (expresion[i] === "+") {
        var valor1 = parseFloat(expresion[i - 1]);
        var valor2 = parseFloat(expresion[i + 1]);
        var valor = valor1 + valor2;
        expresion.splice(i - 1, 3, valor);
        break;
      } else if (expresion[i] === "-") {
        var valor1 = parseFloat(expresion[i - 1]);
        var valor2 = parseFloat(expresion[i + 1]);
        var valor = valor1 - valor2;
        expresion.splice(i - 1, 3, valor);
        break;
      }
    }
  }
  siguientePaso(expresion, table, id);
}

function imprimir(arreglo, table, id) {
  var dato = obtenerTipoDato(arreglo);
  var resultSection = document.getElementById(id);
  var fila1 = table.insertRow();
  var fila2 = table.insertRow();

  for (var i = 0; i < arreglo.length; i++) {
    var celda1 = fila1.insertCell(i);
    var celda2 = fila2.insertCell(i);
    celda1.textContent = arreglo[i];
    celda2.textContent = dato[i];
  }
  resultSection.appendChild(table);
}

//devuelve si es operador
function esOperador(elemento) {
  return ["+", "-", "*", "/"].includes(elemento);
}

//devuelve si es numero
function esNumero(elemento) {
  return !isNaN(parseFloat(elemento)) && isFinite(elemento);
}

//obtiene el tipo de dato del arreglo
function obtenerTipoDato(arreglo) {
  var datos = [];

  for (var i = 0; i < arreglo.length; i++) {
    var elemento = arreglo[i];

    if (esNumero(elemento)) {
      if (/^-?\d+$/.test(elemento)) {
        datos.push("int");
      } else {
        datos.push("double");
      }
    } else if (esOperador(elemento)) {
      datos.push("     ");
    } else {
      datos.push("var");
    }
  }

  return datos;
}

//Convierte a arreglo
function convertirAArreglo(expresion) {
  var terminos = expresion.split(/([+\-*/])/);
  terminos = terminos
    .map(function (termino) {
      return termino.trim();
    })
    .filter(Boolean);
  return terminos;
}
