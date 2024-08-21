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

// mostar solución b
function toggleSolution() {
  const solution = document.getElementById("solution");
  solution.style.display = solution.style.display === "none" ? "block" : "none";

  const button = document.getElementById("showSolution");

  if (solution.style.display === "block") {
    button.innerText = "Ocultar Solución Simplificada";
    button.style.backgroundColor = "red";
  } else {
    button.innerText = "Mostrar Solución Simplificada";
    button.style.backgroundColor = ""; // Resetea el color de fondo
  }
}

//fin mostrar solución b

// constante que contiene los pares de números y strings
const pares = [
  { numero: 1, String: "1" },
  { numero: 30, String: "30" },
  { numero: 10, String: "10" },
];

// Iterar sobre cada par de números y strings

pares.forEach(({ numero, String }) => {
  console.log(
    numero == String
      ? `Las variables ${numero} y ${String} tienen el mismo valor, pero tipos diferentes`
      : `Las variables ${numero} y ${String} no tienen el mismo valor`
  );
  // Comparar si los valores son iguales y del mismo tipo
  console.log(
    numero === String
      ? `Las variables ${numero} y ${String} tienen el mismo valor y el mismo tipo`
      : `Las variables ${numero} y ${String} no tienen el mismo tipo`
  );
});

//fin solución b

// dia 2

// Función que contiene la lógica del Día 2
function iniciarInteraccionDia2() {
  // Función para validar que se ingrese un número
  function validarNumero(input) {
    return !isNaN(input) && input.trim() !== ""; // trim() elimina los espacios en blanco al inicio y al final
  }

  // Preguntas iniciales con validación
  let nombre = prompt("¿Cuál es tu nombre?").trim(); // trim() elimina los espacios en blanco al inicio y al final
  if (!nombre) {
    Swal.fire(
      `Error`,
      `Por favor, ingresa un nombre válido, no puede estar vacio.`,
      "error"
    );
    return;
  }

  let edad;
  do {
    edad = prompt("¿Cuántos años tienes?");
    if (edad === null) return; // Si el usuario presiona "Cancelar", se detiene la interacción
  } while (!validarNumero(edad));

  let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
  if (!lenguaje) {
    Swal.fire(
      `Error`,
      `Por favor, ingresa un lenguaje válido, no puede estar vacio.`,
      "error"
    );
    return;
  }

  // Mensaje principal con personalización y un toque motivacional
  const mensaje = `¡Hola ${nombre}! Es increíble que a tus ${edad} años ya estés aprendiendo ${lenguaje}. ¡Sigue así, vas por buen camino!`;
  alert(mensaje);

  // Ejercicio opcional con validación
  let respuesta;
  do {
    respuesta = prompt(
      `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`
    );
  } while (respuesta !== "1" && respuesta !== null);

  if (respuesta == "1") {
    alert("¡Excelente! La constancia es clave para el éxito. ¡Sigue adelante!");
  } else if (respuesta === "2") {
    alert(
      "No te desanimes, explorar otros lenguajes también puede ser muy enriquecedor."
    );
  } else {
    alert("¡Gracias por participar! 🚀");
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

//  efecto haz click en el título del Día 2 para interactuar con el script

const element = document.getElementById("dia2");

element.addEventListener("mouseover", () => {
  element.classList.add("active");
});

element.addEventListener("mouseout", () => {
  element.classList.remove("active");
});

// dia 3

// Función que contiene la lógica del Día 3

document
  .getElementById("startGame")
  .addEventListener("click", async function () {
    //Despalzar al usuario a la sección de juego
    document.getElementById("dia-3").scrollIntoView({ behavior: "smooth" });

    const { value: area } = await Swal.fire({
      title: "¿En qué área te gustaría trabajar?",
      input: "select",
      inputOptions: {
        Frontend: "Frontend",
        Backend: "Backend",
      },
      inputPlaceholder: "Selecciona un área",
      showCancelButton: true,
    });

    if (area) {
      let frameworkOrLang;
      // Preguntas adicionales según el área seleccionada

      if (area === "Frontend") {
        ({ value: frameworkOrLang } = await Swal.fire({
          title: "¿Qué framework de frontend te gustaría aprender?",
          input: "select",
          inputOptions: {
            React: "React",
            Vue: "Vue",
          },
          inputPlaceholder: "Selecciona un framework",
          showCancelButton: true,
        }));
      } else if (area === "Backend") {
        ({ value: frameworkOrLang } = await Swal.fire({
          title: "¿Qué lenguaje de programación te gustaría aprender?",
          input: "select",
          inputOptions: {
            "C#": "C#",
            Java: "Java",
          },
          inputPlaceholder: "Selecciona un lenguaje",
          showCancelButton: true,
        }));
      }

      if (frameworkOrLang) {
        // Mensaje final con las elecciones del usuario

        await Swal.fire(
          `¡Genial! Te gustaría trabajar en ${area} y aprender ${frameworkOrLang}.`
        );

        const { value: fullstack } = await Swal.fire({
          title: "¿Te gustaría ser desarrollador FullStack?",
          input: "checkbox",
          inputValue: 1,
          text: "¡La versatilidad siempre es una gran ventaja!",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        });

        if (fullstack) {
          await Swal.fire(
            "¡Excelente! La versatilidad siempre es una gran ventaja."
          );
        } else {
          await Swal.fire(
            "¡Entendido! Es importante especializarse en un área para ser un experto."
          );
        }

        let tecnologias = [];
        let otraTecnologia = true;

        // mientras el usuario quiera agregar más tecnologías

        while (otraTecnologia) {
          const { value: tecnologia } = await Swal.fire({
            title: "Ingresa una tecnología que te gustaría aprender",
            input: "text",
            inputPlaceholder: "Nombre de la tecnología",
            showCancelButton: true,
          });

          if (tecnologia) {
            tecnologias.push(tecnologia);
            await Swal.fire(
              `Buena elección, ${tecnologia} es una excelente tecnología.`
            );
          }

          otraTecnologia = await Swal.fire({
            title: "¿Quieres agregar otra tecnología?",
            input: "checkbox",
            inputValue: 1,
            text: "Selecciona esta opción para agregar más tecnologías.",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
          }).then((result) => result.value);
        }

        // Mensaje final con las tecnologías seleccionadas

        if (tecnologias.length > 0) {
          await Swal.fire(
            `¡Genial! Te gustaría aprender: ${tecnologias.join(", ")}`
          );
        } else {
          await Swal.fire({
            title: "¡Entendido!",
            text:
              "No hay problema, puedes seguir explorando nuevas tecnologías.",
            icon: "info",
          });
        }
      }
    } else {
      await Swal.fire({
        title: "¡Entendido!",
        text: "Por favor, ingresa un área válida (Frontend o Backend).",
        icon: "alarm",
      });
    }
  });

// dia 4

// Función que contiene la lógica del Día 4

document.getElementById("startGameDay4").addEventListener("click", function () {
  Swal.fire({
    title: "¡Bienvenido al Día 4!",
    text: "¡Vamos a jugar un juego de adivinanzas! 🎉. Tienes solo 3 intentos.",
    icon: "question",
    confirmButtonText: "¡Comencemos!",
  }).then(() => {
    const numeroCorrecto = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
    console.log(numeroCorrecto);
    let intentos = 3;

    function adivinar() {
      Swal.fire({
        title: `Intento ${4 - intentos}`,
        input: "number",
        inputAttributes: {
          min: 0,
          max: 10,
        },
        showCancelButton: true,
        confirmButtonText: "Adivinar",
        cancelButtonText: "Salir del juego",
        preConfirm: (value) => {
          if (value === "" || isNaN(value) || value < 0 || value > 10) {
            Swal.showValidationMessage(
              "Por favor, ingresa un número válido entre el 0 y el 10."
            );
          } else {
            return value;
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const adivinanza = parseInt(result.value, 10);

          if (adivinanza === numeroCorrecto) {
            Swal.fire({
              html:
                "<h2 class='glitter'>¡Felicidades! ¡Adivinaste el número correcto!</h2>",
              text: `El número correcto era ${numeroCorrecto}.`,
              icon: "success",
              confirmButtonText: "Genial!",
            }).then(() => {
              showGlitter(); // Llamar a la función para mostrar glitter
            });
          } else {
            intentos--;
            if (intentos > 0) {
              Swal.fire({
                title: "¡Incorrecto!",
                text: "¡Sigamos intentando! 🚀",
                icon: "error",
                confirmButtonText: "Intentar de nuevo",
              }).then(() => {
                adivinar();
              });
            } else {
              Swal.fire({
                title: "¡Lo siento!",
                text: `El número correcto era ${numeroCorrecto}.`,
                icon: "error",
                confirmButtonText: "Entendido",
              });
            }
          }
        }
      });
    }
    adivinar();
  });
});

// Glitter effect function

function showGlitter() {
  console.log("Glitter effect started"); // Para depuración

  confetti({
    particleCount: 100,
    spread: 160,
    origin: { y: 0.6 },
    colors: ["#ffcc00", "#ff9900", "#ff6600"],
    shapes: ["circle"], //cambiar la forma a círculo para simular glitter
    scalar: 0.6, // Escala para hacer las partículas más pequeñas
  });
}

// dia 5

// Función que contiene la lógica del Día 5

// Asociar la función al evento click en el botón "Comenzar" del Día 5
document
  .getElementById("startDia5")
  .addEventListener("click", async function () {
    // Crear listas vacías para cada categoría

    let fruits = [];
    let dairy = [];
    let frozen = [];
    let sweets = [];
    let others = [];

    while (true) {
      // Bucle para agregar alimentos a la lista de compras
      const { value: alimento } = await Swal.fire({
        title: "Agregar un alimento a tu lista de compras",
        width: 600,
        text: "Agrega el nombre de el alimento:",
        input: "text",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Terminar",
        confirmButtonText: "Agregar",
        inputValidator: (value) => {
          if (!value) {
            return "¡El nombre del alimento no puede estar vacío!"; // Validación para que el campo no esté vacío
          }
        },
      });
      if (!alimento) break; // Si el usuario cancela, se termina el bucle

      const { value: categoria } = await Swal.fire({
        // Seleccionar la categoría del alimento
        title: "Categoria del alimento",
        text: "Selecciona la categoria del alimento:",
        input: "select",
        inputOptions: {
          fruits: "Frutas",
          dairy: "Lácteos",
          frozen: "Congelados",
          sweets: "Dulces",
          others: "Otros",
        },
        showCancelButton: true, // Mostrar botón de cancelar
      });

      if (!categoria) break; // Si el usuario cancela, se termina el bucle

      //bucle para agregar el alimento a la categoría correspondiente

      switch (categoria) {
        case "fruits":
          fruits.push(alimento);
          break;
        case "dairy":
          dairy.push(alimento);
          break;
        case "frozen":
          frozen.push(alimento);
          break;
        case "sweets":
          sweets.push(alimento);
          break;
        case "others":
          others.push(alimento);
          break;
      }
    }
    // Generar la lista de compras

    let output = "<h3>Lista de Compras:</h3> ";
    output += fruits.length ? `<p>Frutas: ${fruits.join(", ")}</p>` : "";
    output += dairy.length ? `<p>Lácteos: ${dairy.join(", ")}</p>` : "";
    output += frozen.length ? `<p>Congelados: ${frozen.join(", ")}</p>` : "";
    output += sweets.length ? `<p>Dulces: ${sweets.join(", ")}</p>` : "";
    output += others.length ? `<p>Otros: ${others.join(", ")}</p>` : "";
    let outputContainer = document.getElementById("shopping-list-output");
    outputContainer.innerHTML = output;

    // Mostrar la lista de compras en un modal

    await Swal.fire({
      title: "¡Lista de Compras Generada!",
      html: output,
      confirmButtonText: "OK",
    });
  });

//dia 6

// Función que contiene la lógica del Día 6

document
  .getElementById("startDia6")
  .addEventListener("click", async function () {
    // Crear listas vacías para cada categoría
    let fruits = [];
    let dairy = [];
    let frozen = [];
    let sweets = [];
    let others = [];

    while (true) {
      // Bucle para agregar alimentos a la lista de compras
      const { value: alimento } = await Swal.fire({
        title: "Agregar un alimento a tu lista de compras",
        width: 600,
        text: "Agrega el nombre del alimento:",
        input: "text",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: "Terminar",
        confirmButtonText: "Agregar",
        inputValidator: (value) => {
          if (!value) {
            return "¡El nombre del alimento no puede estar vacío!"; // Validación para que el campo no esté vacío
          }
        },
      });
      if (!alimento) break; // Si el usuario cancela, se termina el bucle

      const { value: categoria } = await Swal.fire({
        // Seleccionar la categoría del alimento
        title: "Categoria del alimento",
        text: "Selecciona la categoria del alimento:",
        input: "select",
        inputOptions: {
          fruits: "Frutas",
          dairy: "Lácteos",
          frozen: "Congelados",
          sweets: "Dulces",
          others: "Otros",
        },
        showCancelButton: true, // Mostrar botón de cancelar
      });

      if (!categoria) break; // Si el usuario cancela, se termina el bucle

      // Bucle para agregar el alimento a la categoría correspondiente
      switch (categoria) {
        case "fruits":
          fruits.push(alimento);
          break;
        case "dairy":
          dairy.push(alimento);
          break;
        case "frozen":
          frozen.push(alimento);
          break;
        case "sweets":
          sweets.push(alimento);
          break;
        case "others":
          others.push(alimento);
          break;
      }
    }

    // Función para eliminar un alimento de una categoría
    const eliminarAlimento = async (categoria, lista) => {
      const { value: alimento } = await Swal.fire({
        title: `Eliminar un alimento de ${categoria}`,
        input: "select",
        inputOptions: lista.reduce((options, item, index) => {
          options[index] = item;
          return options;
        }, {}),
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar",
      });

      if (alimento !== undefined) {
        lista.splice(alimento, 1);
      }
    };

    // Preguntar al usuario si desea eliminar algún alimento
    while (true) {
      const { value: action } = await Swal.fire({
        title: "¿Deseas eliminar algún alimento?",
        input: "select",
        inputOptions: {
          no: "No, terminar",
          fruits: "Eliminar de Frutas",
          dairy: "Eliminar de Lácteos",
          frozen: "Eliminar de Congelados",
          sweets: "Eliminar de Dulces",
          others: "Eliminar de Otros",
        },
        showCancelButton: false,
        confirmButtonText: "Seleccionar",
      });

      if (action === "no") break;

      switch (action) {
        case "fruits":
          if (fruits.length) await eliminarAlimento("Frutas", fruits);
          else
            await Swal.fire(
              "No hay alimentos en esta categoría.",
              "",
              "warning"
            );
          break;
        case "dairy":
          if (dairy.length) await eliminarAlimento("Lácteos", dairy);
          else
            await Swal.fire(
              "No hay alimentos en esta categoría.",
              "",
              "warning"
            );
          break;
        case "frozen":
          if (frozen.length) await eliminarAlimento("Congelados", frozen);
          else
            await Swal.fire(
              "No hay alimentos en esta categoría.",
              "",
              "warning"
            );
          break;
        case "sweets":
          if (sweets.length) await eliminarAlimento("Dulces", sweets);
          else
            await Swal.fire(
              "No hay alimentos en esta categoría.",
              "",
              "warning"
            );
          break;
        case "others":
          if (others.length) await eliminarAlimento("Otros", others);
          else
            await Swal.fire(
              "No hay alimentos en esta categoría.",
              "",
              "warning"
            );
          break;
      }
    }

    // Generar la lista de compras
    let output = "<h3>Lista de Compras:</h3> ";
    output += fruits.length ? `<p>Frutas: ${fruits.join(", ")}</p>` : "";
    output += dairy.length ? `<p>Lácteos: ${dairy.join(", ")}</p>` : "";
    output += frozen.length ? `<p>Congelados: ${frozen.join(", ")}</p>` : "";
    output += sweets.length ? `<p>Dulces: ${sweets.join(", ")}</p>` : "";
    output += others.length ? `<p>Otros: ${others.join(", ")}</p>` : "";
    let outputContainer = document.getElementById("shopping-list-output");
    outputContainer.innerHTML = output;

    // Mostrar la lista de compras en un modal
    await Swal.fire({
      title: "¡Lista de Compras Generada!",
      html: output,
      confirmButtonText: "OK",
    });
  });
// fin día 6
