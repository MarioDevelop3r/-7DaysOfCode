let numeroUn = 1;
let stringUn = "1";

let numeroTreinta = 30;
let stringTreinta = "30";

let numeroDiez = 10;
let stringDiez = "10";

if (numeroUn == stringUn) {
  console.log(
    "Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes"
  );
} else {
  console.log("Las variables numeroUn y stringUn no tienen el mismo valor");
}

if (numeroTreinta === stringTreinta) {
  console.log(
    "Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo"
  );
} else {
  console.log(
    "Las variables numeroTreinta y stringTreinta no tienen el mismo tipo"
  );
}

if (numeroDiez == stringDiez) {
  console.log(
    "Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes"
  );
} else {
  console.log("Las variables numeroDiez y stringDiez no tienen el mismo valor");
}

// Función que contiene la lógica del Día 2
function iniciarInteraccionDia2() {
  // Función para validar que se ingrese un número
  function validarNumero(input) {
    return !isNaN(input) && input !== "";
  }

  // Preguntas iniciales con validación
  let nombre = prompt("¿Cuál es tu nombre?");
  let edad;
  do {
    edad = prompt("¿Cuántos años tienes?");
  } while (!validarNumero(edad));

  let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

  // Mensaje principal con personalización y un toque motivacional
  const mensaje = `¡Hola ${nombre}! Es increíble que a tus ${edad} años ya estés aprendiendo ${lenguaje}. ¡Sigue así, vas por buen camino!`;
  alert(mensaje);

  // Ejercicio opcional con validación
  let respuesta;
  do {
    respuesta = prompt(
      `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`
    );
  } while (respuesta !== "1" && respuesta !== "2");

  if (respuesta == "1") {
    alert("¡Excelente! La constancia es clave para el éxito. ¡Sigue adelante!");
  } else {
    alert(
      "No te desanimes, explorar otros lenguajes también puede ser muy enriquecedor."
    );
  }

  // Mensaje final motivacional
  alert(
    "¡Recuerda, cada pequeño paso que das te acerca a ser un gran programador! 🚀"
  );
}

// Asegúrate de que el script se ejecute después de que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Asocia la función al evento click en el título del Día 2
  document
    .getElementById("dia2")
    .addEventListener("click", iniciarInteraccionDia2);
});
